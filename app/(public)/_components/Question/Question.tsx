'use client'

import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LuFilm } from 'react-icons/lu'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg'


type Input = {
    topic: string;
    editor: string;
}

const Question = () => {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
    const { register, handleSubmit } = useForm<Input>();

    const onSubmit: SubmitHandler<Input> = (values) => {
        console.log(values);

    };

    return (
        <div className='mb-20'>

            <header className='flex items-center gap-6 font-medium text-xl pb-8'>
                <LuFilm />
                ตั้งกระทู้คำถาม
            </header>


            <form
                onSubmit={handleSubmit(onSubmit)}
                className='bg-white p-8 rounded-xl flex flex-col gap-4'>
                <section className='flex flex-col gap-4'>
                    <h3 className='font-semibold'>
                        หัวข้อกระทู้
                    </h3>
                    <input
                        type="text"
                        placeholder='หัวข้อกระทู้'
                        className='border rounded-xl w-full p-2 pl-6'
                        {...register('topic', { required: true })}
                    />
                </section>

                {/* Editor */}
                <section className='flex flex-col gap-4'>
                    <h3 className='font-semibold'>
                        เนื้อหา
                    </h3>
                    <div className='border rounded-xl h-[200px]'>
                        <Editor
                            editorState={editorState}
                            onEditorStateChange={setEditorState}
                        />
                    </div>
                </section>

                <button
                    type='submit'
                    className='bg-lime-600 text-white p-3 w-[180px] rounded-lg ml-auto'>
                    ส่ง
                </button>
            </form>
        </div>
    )
}

export default Question