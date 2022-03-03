 
 import Card from "../components/shared/Card";
 import Navbar from "../components/layouts/navbar";
function AboutPage() {
  return (
      <div className="row justify-content-flexend position-relative about-page">
          <div className="mx-auto col-md-8 col-11 m-5">
            <Card reverse={false}>
              <Navbar />
                <div className="my-3">
                    <h2>AboutPage</h2>
                    <p>This his the about page with all explanations...</p>
                </div>
            </Card>
          </div>
      </div>
  )
}

export default AboutPage