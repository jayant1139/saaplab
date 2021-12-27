import React from 'react'

export default function Gallery() {
    return (
        <>
             <div class="flex-container">
        <div class="card-container">
            <div class="img-container"><img src={require("..//images/cafe.png").default} alt=""/></div>
            <div class="description">
                <p>
                    Ravi and Ravi joined SKS at Royal Café, Lucknow for a small treat. First in person meeting with Ravi
                    Kiran.. </p>
            </div>
        </div>

        <div class="card-container">
            <div class="img-container"><img src={require("..//images/office.webp").default} alt=""/></div>
            <div class="description">
                <p>

                    Sagar and Vivek - First day of work (Physical presence in Physics Department) after a long gap due
                    to shut-down of labs amid COVID-19 </p>
            </div>
        </div>

        <div class="card-container">
            <div class="img-container"><img src={require("..//images/sagarparty.webp").default} alt=""/></div>
            <div class="description">
                <p>

                    Sagar gave a us a party to celebrate his successful Comprehensive viva </p>
            </div>
        </div>


        <div class="card-container">
            <div class="img-container"><img src={require("..//images/onlinemeet2.png").default} alt=""/></div>
            <div class="description">
                <p>

                    Online Group Meetings!! </p>
            </div>
        </div>

        <div class="card-container">
            <div class="img-container"><img src={require("..//images/teacherday.png").default} alt=""/></div>
            <div class="description">
                <p>
                    Teachers' Day, 2021. Students arranged a surprise party in my office!! </p>
            </div>
        </div>

        <div class="card-container">
            <div class="img-container"><img src={require("..//images/gallery07.webp").default} alt=""/></div>
            <div class="description">
                <p>

                Coffee sessions @ CCD  </p>
            </div>
        </div>

        <div class="card-container">
            <div class="img-container"><img src={require("..//images/appmember.webp").default} alt=""/></div>
            <div class="description">
                <p>

                APP-Lab members know how to celebrate, be it small or big occasion.

Coffee sessions @ CCD  </p>
            </div>
        </div>

        <div class="card-container">
            <div class="img-container"><img src={require("..//images/surprisebday.webp").default} alt=""/></div>
            <div class="description">
                <p>
                Surprise party @My birthday- 2021</p>
            </div>
        </div>

        <div class="card-container">
            <div class="img-container"><img src={require("..//images/surprisebday2.webp").default} alt=""/></div>
            <div class="description">
                <p>
                Surprise party @My birthday- 2021 </p>
            </div>
        </div>

        <div class="card-container">
            <div class="img-container"><img src={require("..//images/youngestgun.webp").default} alt=""/></div>
            <div class="description">
                <p>
                Youngest gun of APP-Lab @ Lucknow Metro</p>
            </div>
        </div>
    </div>

    
        </>
    )
}

