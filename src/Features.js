import React from 'react';

const Features = ({features}) => {

   
    const featuresArray = () => {
    
        return features.map(feature => {


            return (
                     <span className="feature-item">{feature}</span>
               
                ); 
        });

    }


    return (
        <div className="features">
            {featuresArray()}
        </div>
    )


}

export default Features;