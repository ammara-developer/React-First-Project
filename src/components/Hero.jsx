const Herosection =()=>{
return<main className="hero">
    <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
            Discover the latest men's lifestyle and activewear from Nike. Browse new footwear and apparel for all levels of activity.

        </p>
        <div className="hero-button">
            <button>SHOP NOW</button>
            <button>CATEGORY</button>
        </div>
        <div className="hero-brand">
            <p>ALSO AVALIABLE NOW</p>
            <div className="brand-icons">
            <img src={`${import.meta.env.BASE_URL}images/amazon.png`} />
<img src={`${import.meta.env.BASE_URL}images/flipkart.png`} alt="flipkart" />
            </div>
        </div>
    </div>
     <div className="hero-image">
        <img src={`${import.meta.env.BASE_URL}images/hero-image.png`} alt="hero" />
     </div>
</main>


}
export default Herosection;