import React from 'react';
import './detaildestination.css';

const Ulasan = ()=>{
	const testimonials = [
    {
      name: 'Annisa Azizah',
      avatar: '/profile.webp',
      rating: 5,
      text: 'Cocok untuk ibu-ibu, disediakan membawa sang cah yang cukup.'
    },
    {
      name: 'Mulyono',
      avatar: '/profile.webp',
      rating: 5,
      text: 'Tempat sederhana yang cocok untuk anak-anak dan bisa menghirup udara segar.'
    },
    {
      name: 'Reza Zulfikar',
      avatar: '/profile.webp',
      rating: 5,
      text: 'Wangiang sangat nyaman dan baik-baik, seafood halalan masih terjaga.'
    },
    {
      name: 'Athalla Naufal',
      avatar: '/profile.webp',
      rating: 5,
      text: 'Bedres ke Madnung memang tak terduga sangat segar inded.'
    }
  ];

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <span key={index} className="text-yellow-400">★</span>
    ));
  };
	return (
		<>
			<header style={{background:'white'}}>
				<div class="container d-flex gap-5  align-items-center">
					<div class="icon">
						<img src="/green-left-arrow.webp"/>
					</div>
					<div class="line"></div>
				</div>
			</header>
			<div class="container mb-5 d-flex gap-5 justify-content-between">
				<div class="col-5">
					<div>
						<div style={{fontSize:'24px',fontWeight:'bold',marginBottom:'10px'}}>Ulasan dan Penilaian</div>
						<div class="d-flex gap-5 mt-5">
							<div class="d-flex flex-column align-items-center gap-2" style={{boxShadow:'2px 3px 2px 3px #0000001c',padding:'20px',borderRadius:'20px'}}>
								<div style={{fontWeight:'bold',fontSize:'24px'}}>4.6</div>
								<div class="d-flex">
									<img src="/yellow-star.webp"/>
									<img src="/yellow-star.webp"/>
									<img src="/yellow-star.webp"/>
									<img src="/yellow-star.webp"/>
									<img src="/yellow-star.webp"/>
								</div>
								<div>100 Ulasan</div>
							</div>
							<div style={{width:'100%',fontWeight:'bold'}}>
								<div class="d-flex gap-2 align-items-center" style={{width:'100%'}}>
									<div>5</div>
									<div class="col-12 position-relative">
										<div class="line-big-gray"></div>
										<div class="line-big" style={{width:"100%"}}></div>
									</div>
								</div>
								<div class="d-flex gap-2 align-items-center" style={{width:'100%'}}>
									<div>4</div>
									<div class="col-12 position-relative">
										<div class="line-big-gray"></div>
										<div class="line-big" style={{width:"80%"}}></div>
									</div>
								</div>
								<div class="d-flex gap-2 align-items-center" style={{width:'100%'}}>
									<div>3</div>
									<div class="col-12 position-relative">
										<div class="line-big-gray"></div>
										<div class="line-big" style={{width:"60%"}}></div>
									</div>
								</div>
								<div class="d-flex gap-2 align-items-center" style={{width:'100%'}}>
									<div>2</div>
									<div class="col-12 position-relative">
										<div class="line-big-gray"></div>
										<div class="line-big" style={{width:"30%"}}></div>
									</div>
								</div>
								<div class="d-flex gap-2 align-items-center" style={{width:'100%'}}>
									<div>1</div>
									<div class="col-12 position-relative">
										<div class="line-big-gray"></div>
										<div class="line-big" style={{width:"0"}}></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-4">
					<div class="d-flex align-items-center position-relative">
						<img src="/taman-siberut.jpg" style={{width:'100%',borderRadius:'10px'}} />
						<div style={{height:'100%',width:'100%',position:'absolute',background:'#00000059'}}></div>
						<div style={{fontStyle:'italic',color:'white',fontWeight:'bold',position:'absolute',fontSize:'36px',padding:'25px'}}>Taman<br/>Nasional<br/>Siberut</div>
					</div>
				</div>
			</div>
			<div className="w-full p-4 container">
	      <h2 className="text-lg font-bold mb-4">Apa kata mereka?</h2>
	      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 d-flex">
	        {testimonials.map((testimonial, index) => (
	          <div key={index} className="bg-white p-4 rounded shadow">
	            <div className="d-flex align-items-center mb-3 gap-3">
	              <img
	                src={testimonial.avatar}
	                alt={testimonial.name}
	                className="rounded-full mr-3"
	                style={{width:'32px',height:'32px'}}
	              />
	              <div style={{fontSize:'12px'}}>
	                <div style={{fontSize:'14px'}}>{testimonial.name}</div>
	                <div className="flex">
	                  {renderStars(testimonial.rating)}
	                </div>
	              </div>
	            </div>
	            <p className="text-gray-600 text-sm">{testimonial.text}</p>
	          </div>
	        ))}
	      </div>
	    </div>
		</>
	);
}

export default Ulasan;