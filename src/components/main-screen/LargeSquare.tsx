import { FunctionComponent as FC} from 'react';

const LargeSqures: FC<{}> = () => {
    return(
        <div className='flex justify-center'>
        <div className='mx-2 w-6/12 border rounded-lg '>
            <h2 className='p-2'>Some title</h2>
            <div className='p-2'>
            <p>Some texts</p>
            <p>Some bold texts</p>
            </div>
            <div className='pl-20 relative'>
            <div className='absolute left-3' >small link</div>
            <div className='absolute left-15 top-6' >Some photo</div>
            </div>
        </div>
        <div className='mx-2 w-6/12 border rounded-lg'>
            <h2 className='p-2'>Some title</h2>
            <div className='p-2'>
            <p>Some texts</p>
            <p>Some bold texts</p>
            </div>
            <div className='pl-20 relative'>
            <div className='absolute left-15 top-6' >Some photo</div>
            </div>
        </div>
        </div>
    )
}

export default LargeSqures