import { useForm } from '@inertiajs/inertia-react'; // Make sure this is correct for your framework
import React from 'react';
import kashmirImage from '../../images/kashmir.jpg';
export default function Home({ categories }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: ''
    });

    const onSubmitHandler = (e) => {
        e.preventDefault();
        post('/category');
        console.log(data); // Here, you'd generally post the data.
    };

    // delete function
    const { delete: destroy, processing2 } = useForm();

    const handleDelete = (id) => {
        destroy(`/category/${id}`);  // Replace this with your delete route
    };

    return (
        // <div>
        //     <div className='container-fluid' style={{ backgroundImage: `url(${kashmirImage})`,height:`100vh`,
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        //     backgroundRepeat: 'no-repeat'
        // }}>                 
        // </div>
        <>
{/* slider */}
<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

                  
      <div className="carousel-inner" style={{height:'100vh'}}>
        <div className="carousel-item active" data-bs-interval="10000" 
        style={{ backgroundImage: `url(${kashmirImage})`,height:`100vh`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}
        >
          {/* <img src={kashmirImage} style={{height:'100vh'}} className="d-block w-100 object-fit-cover" alt="First Slide" /> */}
          <div className="carousel-caption d-none d-md-block  top-50 start-50 translate-middle mt-5">
            <h1 className="text-white">First slide label</h1>
            <p className="text-white">Some representative placeholder content for the first slide.</p>
          </div>
        </div>

        
    

    
        <div className="carousel-item " data-bs-interval="10000" 
        style={{ backgroundImage: `url(${kashmirImage})`,height:`100vh`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}
        >
          {/* <img src={kashmirImage} style={{height:'100vh'}} className="d-block w-100 object-fit-cover" alt="First Slide" /> */}
          <div className="carousel-caption d-none d-md-block  top-50 start-50 translate-middle mt-5">
            <h1 className="text-white">First slide label</h1>
            <p className="text-white ">Some representative placeholder content for the first slide.</p>
          </div>
        </div>

        
   

     
        <div className="carousel-item " data-bs-interval="10000" 
        style={{ backgroundImage: `url(${kashmirImage})`,height:`100vh`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}
        >
          {/* <img src={kashmirImage} style={{height:'100vh'}} className="d-block w-100 object-fit-cover" alt="First Slide" /> */}
          <div className="carousel-caption d-none d-md-block  top-50 start-50 translate-middle mt-5">
            <h1 className="text-white">First slide label</h1>
            <p className="text-white">Some representative placeholder content for the first slide.</p>
          </div>
       

        
      </div>
      </div>
      <div className='carousel-divv'>

      </div>

      <button
        className="carousel-control-prev"
        type="button"

        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon bg-dark rounded-pill p-3" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon  bg-dark rounded-pill p-3" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

{/* 
            <h4>Form Status: {processing ? "Submitting..." : "Ready"}</h4>
            <form onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    placeholder="Category"
                    id="name"
                    value={data.name}
                    onChange={e => setData('name', e.target.value)}
                />
                <button type="submit" disabled={processing}>Insert</button>
            </form>
            <h4>{processing ? "Processing..." : "Categories"}</h4>
            {categories.map(item => (
                <div key={item.id}>
                    <h1 className="text-white">{item.name}</h1>
                    <button onClick={() => handleDelete(item._id)} disabled={processing2}>
                        Delete
                    </button>
                </div>
            ))}
         */}
        </>
    );
}
