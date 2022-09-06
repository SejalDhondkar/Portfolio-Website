import logo from './logo.svg';
import img1 from './images/slide-1.jpg'
import img2 from './images/slide-2.jpg'
import img3 from './images/slide-3.jpg'
import './App.css';
import { useState, useEffect } from "react";

function App() {

  const [blogs, setBlogs] = useState(undefined);

  const [blog, setBlog] = useState("");

  
  // const fetchAllBlogs = async () => {
  //   const response = []
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(response => response.json())
  //   if (response.status === "success") {
  //     console.log(response)
  //     setBlogs(response.data);
  //   }
  // };

  // useEffect(() => {
  //   fetchAllBlogs();
  // }, []);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  //   .then(setBlogs(response))
  //   }, []);

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setBlogs(res)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      {/* NavBar */}
      <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Sejal Dhondkar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Feedback</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    {/* SlideShow */}
     <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={img1} alt="First slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img2} alt="Second slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img3} alt="Third slide"></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> 

{/* Projects */}

<div class="table-responsive" style={{"margin": "20px"}}>
<h2>Projects</h2>
    <table class="table table-hover">
        <thead>
            <tr>
                <th class="table-cell-id">Sr No</th>
                <th>Title</th>
                <th class="text-right">Description</th>
                <th class="text-right" data-sort-onload="asc" data-toggle="sort" tabindex="0">Likes</th>
                <th class="text-right" data-sort-onload="asc" data-toggle="sort" tabindex="0">Bookmarks</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="table-cell-id">1</td>
                <td>Hotforwords Can Explain Lorem Ipsum far better than I can</td>
                <td class="text-right text-nowrap">
                   <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit</small>
                </td>
                <td>23</td>
                <td>7</td>
                
            </tr>
            <tr class="table-row-nested">
                <td class="table-cell-id">2</td>
                <td>A nested item; Which to isn’t lesser together</td>
                <td class="text-right text-nowrap">
                   <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit</small>
                </td>
                <td>67</td>
                <td>12</td>
                
            </tr>
            <tr>
                <td class="table-cell-id">3</td>
                <td>Seas spirit morning, fill seasons every I wherein kind</td>
                <td class="text-right text-nowrap">
                   <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit</small>
                </td>
                <td>11</td>
                <td>3</td>
                
            </tr>
            <tr class="disabled">
                <td class="table-cell-id">4</td>
                <td>A disabled item, eg. for unpublished articles</td>
                <td class="text-right text-nowrap">
                   <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit</small>
                </td>
                <td>28</td>
                <td>10</td>
                
            </tr>
            <tr>
                <td class="table-cell-id">5</td>
                <td>Cattle she’d of herb third</td>
                <td class="text-right text-nowrap">
                   <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit</small>
                </td>
                <td>89</td>
                <td>42</td>
                
            </tr>
        </tbody>
    </table>
</div>


{/* Feedback form */}
<h3>Feedback Form</h3>
<div class="card" style={{"width": "70%"}}>
  <div class="card-body">
  <label for="name" class="required">Name</label>
<input type="text" class="form-control" id="name" name="name" required />
<div class="form-group">
    <label>Pick a date</label>
    <div class="input-group date" data-onload-datetimepicker='{"locale": "cs", "format": "D. M. YYYY"}'>
        <input type="text" class="form-control" value="26. 6. 2016" />
        <span class="input-group-addon">
            <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>
        </span>
    </div>
</div>
<label for="title" class="required">Feedback Title</label>
<input type="text" class="form-control" id="title" name="title" required />
<label for="message" class="required">Message</label>
<input type="textarea" class="form-control" id="message" name="message" required />

<div class="input-group mb-3">
  <div class="input-group-text">
    <input class="form-check-input mt-0" type="checkbox" value="Software" aria-label="Checkbox for following text input"/>
    <label for="Software">Software</label><br/>
    
  </div><br/>
  <div class="input-group-text">
  <input class="form-check-input mt-0" type="checkbox" value="Hardware" aria-label="Checkbox for following text input"/>
    <label for="Hardware">Hardware</label><br></br>
    </div>
</div>

<button type="submit" class="btn btn-primary btn-raised">Submit</button>

  </div>
</div>


    </div>
  );
}

export default App;
