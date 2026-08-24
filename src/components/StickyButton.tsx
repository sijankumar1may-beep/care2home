import { useRouter } from "next/router";

const StickyButton = ({ buttonTitle }: { buttonTitle: string }) => {
    const router = useRouter();
    const isEmbed = router.query.embed === "app";

    return (
        <div
            className={
                isEmbed
                    ? "fixed bottom-0 left-0 right-0 z-50 md:hidden bg-green-600 text-white shadow-lg min-h-0 pb-[env(safe-area-inset-bottom,0px)]"
                    : "fixed bottom-0 left-0 right-0 z-50 md:hidden bg-green-600 text-white shadow-lg rounded-lg"
            }
            style={isEmbed ? { bottom: 0 } : undefined}
        >
            <a
                href="tel:+919910646415"
                className={
                    isEmbed
                        ? "flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white"
                        : "flex items-center justify-center gap-2 py-4 text-lg font-semibold text-white"
                }
            >
                {`${buttonTitle}`}
            </a>
        </div>
    );
};

export default StickyButton;
