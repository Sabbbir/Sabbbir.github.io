// src/components/Awards.js

import React from 'react';

const awardsData = [
    {
        title: 'MELBU Summer School, Leipzig, Germany',
        date: 'Aug 18 - Aug 29, 2022',
        funding: 'Erasmus+ Scholarship',
        description: 'Participated in an intensive program focusing on Leadership, Entrepreneurship, and Innovation Management. Enhanced my skills and gained valuable experience through collaborative learning.'
    },
    {
        title: 'a2i Pregnancy Monitoring Innovation Challenge 2022',
        date: 'Nov 2022',
        awardingInstitution: 'ICT Division, Cabinet Division, UNDP',
        description: 'Selected as one of the youngest participants from a pool of 40 candidates across Bangladesh.'
    },
    // Add more awards as needed
];

const Awards = () => {
    return (
        <section id="awards">
            <div className="container">
                <h2>Awards</h2>
                <hr />
                {awardsData.map((award, index) => (
                    <div className="education-item" key={index}>
                        <h3>{award.title}</h3>
                        <p className="date">{award.date}</p>
                        {award.funding && <p><strong>Funding:</strong> {award.funding}</p>}
                        {award.awardingInstitution && <p><strong>Awarding Institution:</strong> {award.awardingInstitution}</p>}
                        <p>{award.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Awards;

