import React from 'react';

const Error = ({error}: any) => {
    return (
        <div className='w-full h-[80vh] text-3xl text-gray-500 flex justify-center items-center '>
            {error}
        <span>, Please Check your Connection</span>
        </div>
    );
};

export default Error;