import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from './Header'
import { advertiseApi } from '../../services/allApi'




function Post({ user3 }) {
    const [advertisejobs, setAdvertiseJobs] = useState({
        cname: "",
        jobtitle: "",
        city: "",
        address: "",
        jobtype: "",
        pay: "",
        lastdate: "",
        username: user3,
        posteddate: "",
        description: ""
    });
     const [result2, setResult2] = useState([]);

    console.log(advertisejobs);

     const handleSubmit = () => {
    setAdvertiseJobs({
      cname: "",
      jobtitle: "",
      city: "",
      address: "",
      jobtype: "",
      pay: "",
      lastdate: "",
      username: user3,
      posteddate:"",
      description:""
    });
  };

  const submitJob = async (e) => {
    e.preventDefault();

    const { cname, jobtitle, city, address, jobtype, pay, lastdate, posteddate, description } = advertisejobs;

    if (!cname || !jobtitle || !city || !address || !jobtype || !pay || !lastdate || !posteddate || !description) {
      alert('Please fill in all fields.');
    } else {
      const data = {
        cname,
        jobtitle,
        city,
        address,
        jobtype,
        pay,
        lastdate,
        username: user3,
        posteddate,
        description
      };
      console.log(data);
      const result = await advertiseApi(data);
      console.log(result);
       postedJobs(); 
      alert('Job posted successfully!');
      handleSubmit();
    }
  };

    const postedJobs = async () => {
    const result1 = await postedApi();
    const result4 = result1.data.filter(usr => usr.username === user3);
    setResult2(result4);
  };








  
    

   useEffect(() => {
    postedJobs();
  }, [user3]);


    return (

        <>

            {/* <Header/> */}

            <div className='container-fluid'>
                <Row>
                    <Col sm={12} md={1}></Col>
                    <Col sm={12} md={10}>
                        <div className='border rounded p-4 my-5'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <h5>Employer</h5>
                                <a href="" style={{ textDecoration: 'none' }}>Click here to advertise your job<FontAwesomeIcon icon={faCircleArrowRight} /></a>
                            </div>
                            <h5 className='text-center text-primary'>Posted Jobs</h5>

                            <div className='table-responsive'>
                                <table className='table border'>
                                    <thead>
                                        <tr>
                                            <th className='border-end'>Posted Date</th>
                                            <th className='border-end'>Job Title</th>
                                            <th className='border-end'>City</th>
                                            <th className='border-end'>Job Type</th>
                                            <th className='border-end'>Pay</th>
                                            <th className='border-end'>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {result2.length > 0 ? (
                                        result2.map((item) => (<tr>
                                            <td className='border-end'>2026-11-06</td>
                                            <td className='border-end'>csa</td>
                                            <td className='border-end'>Thodupuzha</td>
                                            <td className='border-end'>full time</td>
                                            <td className='border-end'>154575</td>
                                            <td className='border-end'>
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <button className='btn btn-danger rounded'>Delete</button>
                                                    <button className='btn btn-primary rounded'>Response</button>

                                                </div>
                                            </td>
                                        </tr>)))
                                        :(
                                            <tr>
                                            <td colSpan="6" className='text-center'>No jobs posted</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            <div>
                                <Row>
                                    <Col sm={12} md={1}></Col>
                                    <Col sm={12} md={10}>
                                        <div className='shadow border p-4 mt-5 '>
                                            <div className=' text-center'>
                                                <img src="/post.png" alt="post a job" width={'90px'} />
                                                <h5>Post a job</h5>
                                            </div>
                                            <label htmlFor="" className='mt-3'>Company Name</label>
                                            <input type="text" value={advertisejobs.cname}
                                                onChange={(e) => setAdvertiseJobs({ ...advertisejobs, cname: e.target.value })} className='form-control rounded shadow' />

                                            <label htmlFor="" className='mt-3'>Job Title</label>
                                            <input type="text" value={advertisejobs.jobtitle}
                                                onChange={(e) => setAdvertiseJobs({ ...advertisejobs, jobtitle: e.target.value })} className='form-control rounded  shadow' />


                                            <label htmlFor="" className='mt-3'>City</label>
                                            <input type="text" value={advertisejobs.city}
                                                onChange={(e) => setAdvertiseJobs({ ...advertisejobs, city: e.target.value })} className='form-control rounded  shadow' />


                                            <label htmlFor="" className='mt-3'>Address</label>
                                            <input type="text" value={advertisejobs.address}
                                                onChange={(e) => setAdvertiseJobs({ ...advertisejobs, address: e.target.value })} className='form-control rounded  shadow' />


                                            <label htmlFor="" className='mt-3'>Job Type</label>
                                            <input type="text" value={advertisejobs.jobtype}
                                                onChange={(e) => setAdvertiseJobs({ ...advertisejobs, jobtype: e.target.value })} className='form-control rounded  shadow' />

                                            <label htmlFor="" className='mt-3'>Pay</label>
                                            <input type="text" value={advertisejobs.pay}
                                                onChange={(e) => setAdvertiseJobs({ ...advertisejobs, pay: e.target.value })} className='form-control rounded  shadow' />

                                            <label htmlFor="" className='mt-3'>Last Date to Apply</label>
                                            <input type="text" value={advertisejobs.lastdate}
                                                onChange={(e) => setAdvertiseJobs({ ...advertisejobs, lastdate: e.target.value })} className='form-control rounded  shadow' />


                                            <label htmlFor="" className='mt-3'>Posted Date</label>
                                            <input type="text" value={advertisejobs.posteddate}
                                                onChange={(e) => setAdvertiseJobs({ ...advertisejobs, posteddate: e.target.value })} className='form-control rounded  shadow' />

                                            <label htmlFor="" className='mt-3'>Description</label>
                                            <textarea name="" value={advertisejobs.description}
                                                onChange={(e) => setAdvertiseJobs({ ...advertisejobs, description: e.target.value })} id="" className='form-control rounded  shadow'></textarea>

                                            <div className='d-flex align-items-center justify-content-center'>
                                                <button onClick={submitJob} className='btn btn-success mt-3 rounded px-5'>Post</button>
                                            </div>


                                        </div>
                                    </Col>
                                    <Col sm={12} md={1}></Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={1}></Col>
                </Row>


            </div>
        </>
    )
}

export default Post