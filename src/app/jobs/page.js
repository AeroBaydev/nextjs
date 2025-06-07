"use client";

import { fetchData } from "@/lib/api";
import { useEffect, useState } from "react";

const AllJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]); // To hold filtered job results
    const [searchQuery, setSearchQuery] = useState("");
    const [category, setCategory] = useState("");
    const [allCategory, setAllCategory] = useState([]);
    const [jobTypes, setJobTypes] = useState([]);
    const [selectedJobType, setSelectedJobType] = useState("");
    const [selectedJob, setSelectedJob] = useState({});

    const getJobType = () => {
        fetchData('/jobType/allJobTypes')
            .then((json) => setJobTypes(json))
            .catch((error) => console.error('Failed to load job types', error));
    };

    const getCategory = () => {
        fetchData('/category/allCategory')
            .then((json) => setAllCategory(json))
            .catch((error) => console.error('Failed to load categories', error));
    };

    const getJobs = () => {
        fetchData('/jobs')
            .then((json) => {
                setJobs(json.jobs);
                setFilteredJobs(json.jobs);
                setSelectedJob(json.jobs.length !== 0 ? json.jobs[0] : {});
            })
            .catch((error) => console.error('Failed to load jobs', error));
    };

    useEffect(() => {
        getJobType();
        getJobs();
        getCategory();
    }, []);

    const handleJobTypeChange = (event) => {
        setSelectedJobType(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const applyFilters = () => {
        const filtered = jobs.filter(job => {
            const matchesJobType = !selectedJobType || job.jobType.name === selectedJobType;
            const matchesCategory = !category || job.categoryDetail.name === category;
            const matchesQuery = !searchQuery || job.title.toLowerCase().includes(searchQuery.toLowerCase()) || job.loaction?.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesJobType && matchesCategory && matchesQuery;
        });
        setFilteredJobs(filtered);
    };

    return (
        <div className="page-main">
            <section className="page_banner single_cars bg-blk">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 mx-auto heading-section2 text-center">
                            <h1>Career</h1>
                            <h2>AeroBay Careers</h2>
                            <p>Creative & Design Department</p>
                        </div>
                    </div>
                </div>
                <div className="container singlecarr_section">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-5">
                                    <form className="form srch_form d-flex" onSubmit={(e) => { e.preventDefault(); applyFilters(); }}>
                                        <div className="input-group">
                                            <span className="input-group-append">
                                                <i className="fa fa-search"></i>
                                            </span>
                                            <input
                                                className="form-control border-end-0 border"
                                                type="search"
                                                placeholder="Search for jobs title or location"
                                                value={searchQuery}
                                                onChange={handleSearchChange}
                                                id="example-search-input"
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-theme view-btn">
                                            <span className="outer-bx">Search</span>
                                        </button>
                                    </form>
                                    <div className="col p-0 select_btm cursor-pointer">
                                        <select className="select_0" onChange={handleJobTypeChange} value={selectedJobType}>
                                            <option value="">Select Job Type</option>
                                            {jobTypes?.map((jobType) => (
                                                <option key={jobType.id} value={jobType.name}>
                                                    {jobType.name}
                                                </option>
                                            ))}
                                        </select>
                                        <select className="select_1" onChange={handleCategoryChange} value={category}>
                                            <option value="">Select Category</option>
                                            {allCategory?.map((cat) => (
                                                <option key={cat.id} value={cat.name}>
                                                    {cat.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 listing-btm mt-4">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="job-list">
                                    {filteredJobs.length ? filteredJobs.map(job => (
                                        <div
                                            key={job.id}
                                            className="card job-card active"
                                            onClick={() => setSelectedJob(job)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <div className="card-header">
                                                <h4>{job.title}</h4>
                                                <p><a><i className="fa fa-map-marker-alt"></i>{job.loaction}</a></p>
                                            </div>
                                            <div className="card-body">
                                                <ul className="list-inline tag-list">
                                                    <li><a href="#">{job.jobType.name}</a></li>
                                                    <li><a href="#">{job.categoryDetail.name}</a></li>
                                                </ul>
                                                {job.status === 1 ?
                                                    <a className="box-active" href="#">Active</a> :
                                                    <a className="box-inactive" href="#">Inactive</a>}
                                            </div>
                                        </div>
                                    )) : <p>No jobs found</p>}
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="card card-big">
                                    <div className="card-body">
                                        <div className="card job-card card-inner">
                                            <div className="card-header">
                                                <h4>{selectedJob?.title}</h4>
                                                <p><a><i className="fa fa-map-marker-alt"></i>{selectedJob?.loaction}</a></p>
                                            </div>
                                            <div className="card-body">
                                                <ul className="list-inline tag-list">
                                                    <li><a href="#">{selectedJob?.jobType?.name}</a></li>
                                                    <li><a href="#">{selectedJob?.categoryDetail?.name}</a></li>
                                                </ul>
                                                {selectedJob?.status === 1 ?
                                                    <a className="box-active" href="#">Active</a> :
                                                    <a className="box-inactive" href="#">Inactive</a>}
                                                <a className="btn btn-theme view-btn apply_btn" href="#"><span>Apply now <i>&#129109;</i></span></a>
                                            </div>
                                        </div>
                                        <div className="card card-inner job-card-info">
                                            <div className="card-body">
                                                <ol className="list-inline job_details">
                                                    <li>
                                                        <h5>About Us</h5>
                                                        <p>{selectedJob?.about_us}</p>
                                                    </li>
                                                    <li>
                                                        <h5>Job Description</h5>
                                                        <p>{selectedJob?.job_description}</p>
                                                    </li>
                                                    <li>
                                                        <h5>Key Responsibilities</h5>
                                                        <p>{selectedJob?.key_responsibilities}</p>
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllJobs;
