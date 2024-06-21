import Codelayout from "@/app/Components/Codelayout";

export default function layout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="px-10 py-3 h-full w-full ">


                {children}
            </div>
        </>
    )
}
