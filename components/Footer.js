import React from 'react'

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10
    px-32 py-14 bg-gray-100 text-gray-600">
        <div className="space-y-4 text-sm text-gray-800">
            <h5 className="font-bold">ABOUT</h5>
            <p>How Air works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>
        <div className="space-y-4 text-sm text-gray-800">
            <h5 className="font-bold">COMMUNITY</h5>
            <p>Accessibility</p>
            <p>This is not real site</p>
            <p>Its a pretty awesome clone</p>
            <p>Referrals accepted</p>
            <p>Baig Airbnb</p>
        </div>
        <div className="space-y-4 text-sm text-gray-800">
            <h5 className="font-bold">HOST</h5>
            <p>Baig Airbnb</p>
            <p>Presents</p>
            <p>Try hosting</p>
            <p>Explore hosting resources</p>
            <p>How to host responsibly</p>
        </div>
        <div className="space-y-4 text-sm text-gray-800">
            <h5 className="font-bold">SUPPORT</h5>
            <p>Help Center</p>
            <p>Safety information</p>
            <p>Our COVID-19 Response</p>
            <p>Supporting people with disabilities</p>
            <p>Shohelranabaig Airbnb</p>
        </div>
    </div>
  )
}

export default Footer;