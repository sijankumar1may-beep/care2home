
const StickyButton = ({ buttonTitle }: { buttonTitle: string }) => {


    return (
        < div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-green-600 text-white shadow-lg rounded-lg" >
            <a
                href="tel:+919910646415"
                className="flex items-center justify-center gap-2 py-4 text-lg font-semibold"
            >
                {`${buttonTitle}`}
            </a>
        </div >)
}

export default StickyButton;