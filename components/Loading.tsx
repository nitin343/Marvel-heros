import Image from 'next/image';
import studio from '../public/marvelStudio.png'

function Loading() {

    return (
        <div className="container px-5 py-16 !h-[360px] mx-auto flex flex-col gap-3 justify-center items-center align-baseline w-full">
            <div className="mt-20">
                <Image src={studio} alt="Marvel Studio"  width={180} height={180} />
            </div>
            <div className='font-roboto_Condensed'> Hero's are on the way, Hang on...
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-[2px] border-solid border-[#151515] border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
         </span>
            </div>
        </div>
    )

}

export default Loading;