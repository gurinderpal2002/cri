import React from 'react';

const Features = ({features}) => {

   
    const featuresArray = () => {
    
        return features.map((feature,index) => {


            return (
                     <span key={index} className="feature-item">{feature}</span>
               
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