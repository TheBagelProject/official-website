import { motion } from "framer-motion";

function FloatingPaths({ position }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-warm-yellow dark:text-golden-brown drop-shadow-sm"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.08 + path.id * 0.02}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.4, 0.7, 0.4],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 25 + Math.random() * 15,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths() {
    return (
        <div className="absolute inset-0 w-full h-[100vh] md:h-[120vh] lg:h-[150vh] pointer-events-none overflow-visible">
            {/* Main animation area with extended height */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 opacity-70 dark:opacity-50">
                    <FloatingPaths position={1} />
                    <FloatingPaths position={-1} />
                </div>
                
                {/* Gradient overlay to fade into next section */}
                <div className="absolute inset-0 w-full h-full">
                    {/* Light mode gradient */}
                    <div className="absolute inset-0 dark:hidden"
                         style={{
                             background: 'linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(242, 236, 221, 0.2) 70%, rgba(242, 236, 221, 0.6) 85%, rgba(242, 236, 221, 0.9) 95%, rgba(242, 236, 221, 1) 100%)'
                         }}
                    />
                    
                    {/* Dark mode gradient */}
                    <div className="absolute inset-0 hidden dark:block"
                         style={{
                             background: 'linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(11, 11, 11, 0.2) 70%, rgba(11, 11, 11, 0.6) 85%, rgba(11, 11, 11, 0.9) 95%, rgba(11, 11, 11, 1) 100%)'
                         }}
                    />
                </div>
            </div>
        </div>
    );
}