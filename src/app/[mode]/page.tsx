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

    const showPrefBorder = (idx: number) => answer[idx].prefecture !== answer[idx + 1].prefecture

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
                        { idx === answer.length - 1 
                            ? null
                            : showPrefBorder(idx) 
                                ? <div className='relative border-b-2 border-dashed border-black h-6'>
                                    <span className='absolute t-2'>↓</span>
                                </div>
                                : <div>↓</div>
                        }
                    </div>
                ))
            }
            <button>
                答え合わせ
            </button>
        </div>
    )
 }