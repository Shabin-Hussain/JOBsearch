import { faBuilding, faCalendarDays, faCalendarXmark, faLocationDot, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from '../components/Header'


function Search() {
  return (
    <>
     <Header/>
    <div className='container-fluid'>
        <div className="row my-5">
            <div className="col-md-1"></div>
            <div className="col-md-10 rounded shadow p-5">
              <h4 className='text-center mb-3 text-primary'>Search for your next job</h4>
              <div className="row">
                <div className="col-md-6">
                    <label htmlFor="">Company</label>
                    <input type="text" placeholder='Tcs, Wipro etc.' className='form-control rounded'/>

                    <label htmlFor="" className='mt-4'>Job Type</label> 
                    <input type="text" placeholder='Permanent,Full-time etc.' className='form-control rounded'/>

                     <label htmlFor="" className='mt-4'>Salary</label> 
                    <input type="text" placeholder='150000,200000 etc.' className='form-control rounded'/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="">Location</label>
                    <input type="text" placeholder='Bangalore, Kochi etc.' className='form-control rounded'/>

                    <label htmlFor="" className='mt-4'>Job Title</label> 
                    <input type="text" placeholder='Software, Web Developer etc.' className='form-control rounded'/>

                     <label htmlFor="" className='mt-4'>Sector</label> 
                    <input type="text" placeholder='Private, Public etc.' className='form-control rounded'/>
                </div>
                 <button className='w-100 btn btn-primary rounded mt-4'>Search</button>
              </div>
            </div>
            <div className="col-md-1"></div>
        </div>
        <div>
           
        </div>

    </div>

    <div className='container-fluid'>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10 shadow p-5">
            <h2 className='text-center text-primary'>15 Jobs Found</h2>

            <div className='container-fluid my-2'>
                <div className="row shadow p-4 rounded">
                    <div className="col-md-2 d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon icon={faUserTie} size="2xl" style={{color: "rgb(116, 192, 252)",}} />
                    </div>
                    <div className="col-md-4">
                        <h5>Sharepoint Developer</h5>
                        <h6><FontAwesomeIcon icon={faBuilding} style={{color: "rgb(116, 192, 252)",}} /><span style={{fontSize:'14px'}}>Company:</span> Tata Consultancy Service</h6>
                        <h6><FontAwesomeIcon icon={faCalendarDays} style={{color: "rgb(116, 192, 252)",}} /><span style={{fontSize:'14px'}}>Published on:</span> 18 Jul 2024</h6>
                    </div>
                    <div className="col-md-4 align-self-end">
                        <h6><FontAwesomeIcon icon={faLocationDot} style={{color: "rgb(116, 192, 252)",}} /> Coimbatore, Tamil Nadu </h6>
                          <h6><FontAwesomeIcon icon={faCalendarXmark} style={{color: "rgb(116, 192, 252)",}} /><span style={{fontSize:'14px'}}>Closing on:</span> 18 Jul 2024</h6>
                    </div>
                    <div className="col-md-2">
                        <p className='text-danger' style={{fontSize:'10px'}}>Please Login to Apply!</p>
                        <button className='btn btn-primary rounded'>Login</button>
                    </div>
                </div>

            </div>

            
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
    </>
  )
}

export default Search