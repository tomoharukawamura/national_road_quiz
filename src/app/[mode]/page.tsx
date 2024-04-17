'use client'
import modes from '../../modes/modes.json'
import { mode as modeWrapper } from '@/lib/wrappers'
import ABox from '@/component/ABox'

export default function ModePage ({ params: { mode } }: { params: { mode: string }}) {
    const answer = modes[modeWrapper(mode)].answer
    const yourAnswer = new Map<number, string>()

    const updateYourAnswer = (key: number, value: string) => {
        yourAnswer.set(key, value)
    }

    return (
        <div className='h-screen flex flex-col flex-wrap'>
            {
                answer.map((a, idx) => (
                    <div className='ml-4'>
                        <div key={idx} className='my-1'>
                            <ABox 
                                mapKey={idx} 
                                updateFunc={updateYourAnswer} 
                                isCapital={a.isCapital} 
                                type={a.type}
                            />
                        </div>
                        { idx !== answer.length - 1 ? <div className='flex'>↓</div> : null }
                    </div>
                ))
            }
            <button>
                答え合わせ
            </button>
        </div>
    )
 }