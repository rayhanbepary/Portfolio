import CreativeAgency from './img/projects/creative-agency.jpg';
import CreativeAgency1 from './img/projects/creative-agency1.png';
import CreativeAgency2 from './img/projects/creative-agency2.png';
import CreativeAgency3 from './img/projects/creative-agency3.png';
import CreativeAgency4 from './img/projects/creative-agency4.png';
import CreativeAgency5 from './img/projects/creative-agency5.png';

import BeachResort from './img/projects/beach-resort.jpg';
import BeachResort1 from './img/projects/beach-resort1.png';
import BeachResort2 from './img/projects/beach-resort2.jpg';
import BeachResort3 from './img/projects/beach-resort3.png';

import DoctorsPortal from './img/projects/doctors-portal.jpg';
import DoctorsPortal1 from './img/projects/doctors-portal1.png';
import DoctorsPortal2 from './img/projects/doctors-portal2.png';
import DoctorsPortal3 from './img/projects/doctors-portal3.png';
import DoctorsPortal4 from './img/projects/doctors-portal4.png';

import VolunteerNetwork from './img/projects/volunteer-network.jpg';
import VolunteerNetwork1 from './img/projects/volunteer-network1.png';
import VolunteerNetwork2 from './img/projects/volunteer-network2.png';
import VolunteerNetwork3 from './img/projects/volunteer-network3.png';
import VolunteerNetwork4 from './img/projects/volunteer-network4.png';
import VolunteerNetwork5 from './img/projects/volunteer-network5.png';






export default[
    {
        _id: 1,
        name: 'Creative Agency',
        title: 'Service Selling Application',
        featured: true,
        slug: 'creative-agency',
        liveSite: 'creativeAgencyLive',
        github: 'creativeAgencyGit',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia corrupti, culpa officiis quidem nostrum quae fugiat molestiae accusamus sint facilis earum quibusdam sunt quia soluta necessitatibus error ab maxime blanditiis.",
        image: [
            {
                url: CreativeAgency
            },
            {
                url: CreativeAgency1
            },
            {
                url: CreativeAgency2
            },
            {
                url: CreativeAgency3
            },
            {
                url: CreativeAgency4
            },
            {
                url: CreativeAgency5
            }
        ],
        features: [
            "Service selling application",
            "User can login with google",
            "Available user dashboard",
            "User can order service",
            "User can see which services he/she already ordered",
            "User can give review",
            "User can send message via contact form",
            "Available admin dashboard",
            "Admin can see the list of all order of services",
            "Admin can change order status",
            "Admin can add new service",
            "Admin can make new admin"
        ],
        technologies: [
            "Javascript",
            "ES6",
            "React",
            "CSS3",
            "Bootstrap",
            "Node JS",
            "Mongodb",
            "Express JS",
            "Firebase",
            "Heroku"
        ]
    },
    {
        _id: 2,
        name: 'Beach Resort',
        title: 'Hotel Booking Application',
        featured: true,
        slug: 'beach-resort',
        liveSite: 'beachResortLive',
        github: 'beachResortGit',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia corrupti, culpa officiis quidem nostrum quae fugiat molestiae accusamus sint facilis earum quibusdam sunt quia soluta necessitatibus error ab maxime blanditiis.",
        image: [
            {
                url: BeachResort
            },
            {
                url: BeachResort1
            },
            {
                url: BeachResort2
            },
            {
                url: BeachResort3
            }
        ],
        features: [
            "Hotel booking application",
            "Can feature specific rooms",
            "When click on a single room open with room details",
            "Can search room with various sorting parameters",
        ],
        technologies: [
            "Javascript",
            "ES6",
            "React",
            "CSS3",
            "Bootstrap",
            "Styled Components"
        ]
    },
    {
        _id: 3,
        name: 'Doctors Portal',
        title: 'Doctors Appointment Booking Application',
        featured: true,
        slug: 'doctors-portal',
        liveSite: 'doctorsPortalLive',
        github: 'doctorsPortalGit',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia corrupti, culpa officiis quidem nostrum quae fugiat molestiae accusamus sint facilis earum quibusdam sunt quia soluta necessitatibus error ab maxime blanditiis.",
        image: [
            {
                url: DoctorsPortal
            },
            {
                url: DoctorsPortal1
            },
            {
                url: DoctorsPortal2
            },
            {
                url: DoctorsPortal3
            },
            {
                url: DoctorsPortal4
            }
        ],
        features: [
            "User can login with google",
            "User can book doctors appointment",
            "Available user dashboard",
            "User can see all of his/her appointment",
            "Available admin dashboard",
            "Admin can see the list of all patients",
            "Admin can add doctor"
        ],
        technologies: [
            "Javascript",
            "ES6",
            "React",
            "CSS3",
            "Bootstrap",
            "react-icons",
            "react-calendar",
            "react-hook-form",
            "react-modal",
            "react-router-dom",
            "fontawesome",
            "Node JS",
            "Mongodb",
            "Express JS",
            "Firebase",
            "Heroku"
        ]
    },
    {
        _id: 4,
        name: 'Volunteer Network',
        title: 'Registration in Event as a Volunteer',
        slug: 'volunteer-network',
        liveSite: 'volunteerNetworkLive',
        github: 'volunteerNetworkGit',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia corrupti, culpa officiis quidem nostrum quae fugiat molestiae accusamus sint facilis earum quibusdam sunt quia soluta necessitatibus error ab maxime blanditiis.",
        image: [
            {
                url: VolunteerNetwork
            },
            {
                url: VolunteerNetwork1
            },
            {
                url: VolunteerNetwork2
            },
            {
                url: VolunteerNetwork3
            },
            {
                url: VolunteerNetwork4
            },
            {
                url: VolunteerNetwork5
            }
        ],
        features: [
            "User can login with google",
            "User can register event",
            "Available user dashboard",
            "User can see all of his/her registered event",
            "User can cancel his/her registered event",
            "Working registration form",
            "Available admin dashboard",
            "Admin can see the list of all registered volunteers",
            "Admin can add new event"
        ],
        technologies: [
            "Javascript",
            "ES6",
            "React",
            "CSS3",
            "Bootstrap",
            "Node JS",
            "Mongodb",
            "Express JS",
            "Firebase",
            "Heroku"
        ]
    },
    
]