# Troubleshooting Email Automation Issues

## Issue: Emails work in Google Apps Script testing but not from live website

### Common Causes and Solutions

## 1. Check Google Apps Script Deployment

### Verify Deployment Status:
1. Open your Google Apps Script project
2. Click "Deploy" → "Manage deployments"
3. Ensure the deployment is **active** and using the **latest version**

### Update Deployment (Most Common Fix):
```javascript
// After making changes to your email code:
1. Click "Deploy" → "New deployment"
2. Choose "Web app"
3. Set "Execute as": Me
4. Set "Who has access": Anyone
5. Click "Deploy"
6. IMPORTANT: Copy the NEW URL and update your .env file
```

## 2. Check Environment Variable

### Verify .env File:
Your current URL: `https://script.google.com/macros/s/AKfycbyqb20aFCXeUp8kmqeHwWCKWud7vH55_0g6h7Oi_YLJ6P04qrssa_vmJVLmPIi9K4bb/exec`

### Test the URL directly:
1. Open this URL in browser: [Your Google Apps Script URL]
2. You should see: "Bagel Waitlist API with Email Automation is working! Current time: [timestamp]"
3. If you get an error, the deployment has issues

## 3. Debug the Form Submission

### Add Enhanced Logging to WaitlistForm:
Replace your `submitToGoogleSheets` function with this enhanced version:

```javascript
const submitToGoogleSheets = async (data) => {
  const GOOGLE_SHEETS_URL = process.env.REACT_APP_GOOGLE_SHEETS_URL;
  
  if (!GOOGLE_SHEETS_URL) {
    throw new Error('Google Sheets URL not configured');
  }
  
  try {
    const payload = {
      name: data.name,
      email: data.email,
      waitingExperience: data.waitingExperience,
      currentWorkflow: data.currentWorkflow,
      recentDelays: data.recentDelays,
      timestamp: new Date().toISOString()
    };
    
    console.log('🚀 Sending data to Google Sheets:', payload);
    console.log('📡 URL:', GOOGLE_SHEETS_URL);
    
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
    
    console.log('📨 Response status:', response.status);
    console.log('📨 Response ok:', response.ok);
    
    // Try to read response (might fail due to CORS)
    try {
      const responseText = await response.text();
      console.log('📨 Response text:', responseText);
    } catch (corsError) {
      console.log('📨 CORS prevented reading response (this is normal)');
    }
    
    return true;
  } catch (error) {
    console.error('❌ Error submitting to Google Sheets:', error);
    throw error;
  }
};
```

## 4. Check Google Apps Script Logs

### View Execution Logs:
1. Go to your Google Apps Script project
2. Click "Executions" in the left sidebar
3. Check recent executions for:
   - ✅ Successful executions from web form
   - ❌ Failed executions with error messages
   - 📧 Email sending attempts

### Common Error Messages:
- **"No postData received"**: Form data not reaching script
- **"Gmail service not found"**: Gmail API not enabled
- **"Permission denied"**: Script permissions need reauthorization

## 5. Test Email Sending Directly

### Manual Test Function:
Add this to your Google Apps Script and run it:

```javascript
function testEmailWithFormData() {
  // Simulate form submission data
  const testData = {
    name: 'Test User',
    email: 'your-email@example.com', // Use your actual email
    waitingExperience: 'Test waiting experience',
    currentWorkflow: 'Test workflow',
    recentDelays: 'Test delays'
  };
  
  try {
    // Test the same flow as form submission
    sendWelcomeEmail(testData.email, testData.name);
    console.log('✅ Test email sent successfully');
  } catch (error) {
    console.error('❌ Test email failed:', error.toString());
  }
}
```

## 6. Common Fixes

### Fix 1: Redeploy Google Apps Script
Most common issue - old deployment without email code:
```
1. Save your Apps Script
2. Deploy → New deployment
3. Update .env with new URL
4. Rebuild and redeploy your React app
```

### Fix 2: Check Gmail API Permissions
```
1. In Apps Script: Services → Gmail API → Add
2. Run testEmailWithFormData() function
3. Grant permissions when prompted
4. Test form submission again
```

### Fix 3: Verify Environment Variables
```bash
# In your terminal, check if env var is loaded:
npm start
# Then in browser console:
console.log(process.env.REACT_APP_GOOGLE_SHEETS_URL)
```

### Fix 4: CORS Mode Testing
Try changing from `mode: 'no-cors'` to regular fetch:

```javascript
const response = await fetch(GOOGLE_SHEETS_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload)
});

console.log('Response:', await response.json());
```

## 7. Step-by-Step Debugging Process

### Step 1: Test Google Apps Script URL
- Visit your deployment URL in browser
- Should show "API is working" message

### Step 2: Check Browser Console
- Open DevTools → Console
- Submit form and check for errors
- Look for the logging messages from enhanced function

### Step 3: Check Google Sheets
- Verify form data is being added to sheet
- If data appears but no email = email function issue
- If no data appears = form submission issue

### Step 4: Check Apps Script Executions
- Look for recent executions when form was submitted
- Check execution logs for errors

### Step 5: Test Email Function Directly
- Run testEmailWithFormData() in Apps Script
- Check your email for test message

## 8. Quick Checklist

- [ ] Google Apps Script has latest code with email function
- [ ] Gmail API is enabled in Services
- [ ] New deployment created after adding email code
- [ ] .env file has correct deployment URL
- [ ] React app rebuilt after .env changes
- [ ] Test email function works in Apps Script
- [ ] Google Sheets receiving form data
- [ ] Browser console shows successful form submission

## 9. Emergency Backup: Simple Email Notification

If all else fails, add this simple notification to your Apps Script:

```javascript
function doPost(e) {
  try {
    // Your existing sheet code...
    
    // Simple email notification to yourself
    GmailApp.sendEmail(
      'your-admin-email@example.com',
      'New Bagel Waitlist Signup',
      `New signup from: ${data.name} (${data.email})`
    );
    
    // Then send welcome email to user
    if (data.email && data.name) {
      sendWelcomeEmail(data.email, data.name);
    }
    
    // Rest of your code...
  } catch (error) {
    // Error handling...
  }
}
```

This will at least notify you when someone signs up, helping debug the flow.