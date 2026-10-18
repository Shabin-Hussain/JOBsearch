import React from 'react'

function Tips() {
  return (
    <>
    <div className='container-fluid'>
        <h2 className='text-center my-5 text-primary'>Tips and Advice</h2>
        <div className="row mb-2">
            <div className="col-md-4">
                <div className='shadow p-4 rounded mt-md-5'>
                    <ul>
                        <li>Preparing a CV</li>
                        <li>Tips on writing a covering letter</li>
                        <li>Tips on how to prepare for a job interview</li>
                        <li>How to complete an application form</li>
                        <li>Questions you might be asked at interview</li>
                    </ul>
                </div>
            </div>
            <div className="col-md-8 d-flex justify-content-center align-items-center">
                <div className='shadow border rounded'>
                    <img src="\Focused Professional at Work.png" alt="" width={'450px'} />
                </div>
            </div>
        </div>

        



    </div>
    </>
  )
}

export default Tips