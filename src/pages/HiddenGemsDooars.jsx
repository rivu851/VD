"use client";

import React from "react";


const HiddenGemsDooars = () => {
  const attractions = [
    {
      name: "Gorumara National Park",
      image:
        "https://images.unsplash.com/photo-1626814352521-91a89fff17f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R29ydW1hcmElMjBOYXRpb25hbCUyMFBhcmt8ZW58MHx8MHx8fDI%3D",
      rating: 4.9,
      duration: "3-4 hours",
      price: "₹200",
      description: "Home to Indian one-horned rhinoceros and diverse wildlife",
    },
    {
      name: "Jaldapara National Park",
      image: "https://plus.unsplash.com/premium_photo-1661832611972-b6ee1aba3581?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW5pbWFscyUyMGluJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww",
      rating: 4.8,
      duration: "3-5 hours",
      price: "₹250",
      description:
        "Known for its significant population of Indian one-horned rhinos",
    },
    {
      name: "Buxa Tiger Reserve",
      image:
        "https://images.unsplash.com/photo-1566794774033-2de8ecd7b17c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QnV4YSUyMFRpZ2VyJTIwUmVzZXJ2ZXxlbnwwfHwwfHx8Mg%3D%3D",
      rating: 4.7,
      duration: "4-6 hours",
      price: "₹150",
      description:
        "Tiger reserve with diverse flora and fauna, and historical ruins",
    },
    {
      name: "Chapramari Wildlife Sanctuary",
      image:
        "https://images.unsplash.com/photo-1745985240679-504047d87f7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2hhcHJhbWFyaSUyMFdpbGRsaWZlJTIwU2FuY3R1YXJ5fGVufDB8fDB8fHwy",
      rating: 4.6,
      duration: "2-3 hours",
      price: "₹100",
      description: "Elephant corridor and home to various herbivores and birds",
    },
    {
      name: "Teesta River Rafting",
      image:
        "https://images.unsplash.com/photo-1726497847697-6b5b170baec1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGVlc3RhJTIwUml2ZXIlMjBSYWZ0aW5nfGVufDB8fDB8fHwy",
      rating: 4.5,
      duration: "2-3 hours",
      price: "₹1000",
      description: "Thrill-seeking white water rafting experience",
    },
    {
      name: "Bindu",
      image:
        "https://images.unsplash.com/photo-1667120391389-3d63ccdfd7a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmluZHUlMjByaXZlcnxlbnwwfHwwfHx8Mg%3D%3D",
      rating: 4.4,
      duration: "1-2 hours",
      price: "Free",
      description:
        "A serene village on the Indo-Bhutan border, known for its cardamom plantations",
    },
  ];

  const monuments = [
    {
      name: "Buxa Fort",
      period: "17th Century (rebuilt)",
      significance: "Historical fort used as a prison by the British",
      image:
        "https://images.unsplash.com/photo-1695911242774-c089fc814913?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QnV4YSUyMEZvcnR8ZW58MHx8MHx8fDI%3D",
    },
    {
      name: "Mahananda Wildlife Sanctuary Watchtower",
      period: "20th Century",
      significance:
        "Offers panoramic views and wildlife spotting opportunities",
      image:
        "https://images.unsplash.com/photo-1722075756245-2c5dd03ac216?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFoYW5hbmRhJTIwV2lsZGxpZmUlMjBTYW5jdHVhcnklMjBXYXRjaHRvd2VyfGVufDB8fDB8fHwy",
    },
    {
      name: "Malbazar Rajbari",
      period: "Early 20th Century",
      significance: "Historic palace showcasing local architecture",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhMWFhUWFRcVFxcYGRcXFxcVFRcXFxUXFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0mHSUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tN//AABEIALcBFAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAIEBQYBB//EAEYQAAEDAgMEBwUGAwcBCQAAAAEAAhEDIQQSMQVBUZEGEyJhcYGhMlKxwdEHFCNC4fAVkqIzU2JygrLxQxYkRFRjc4PC4v/EABoBAAIDAQEAAAAAAAAAAAAAAAECAAMEBQb/xAAnEQACAgEEAgMAAgMBAAAAAAAAAQIRAwQSITETQSJRYRQyUoGRof/aAAwDAQACEQMRAD8Ai1HuzHtHU7zxSa53vHmU+q3tHxPxXQ1eiVHmnI4HO4nmU8Od7x5ldDU8NQF3DQ53E8ynZ3cTzKcGJwaoCxge7ieZXczuJ5lPDV0MQJYzM7ieZSzO4nmiZUsihLB5ncTzK6HO4nmUTKllUsgzM7ieZTs5iJPMpwanNYgHkDLuJ5lXWyqLPaeSSOJtPgoDmAxaEWkSIaNCRPfKrycrgsxy2ysfthoLszDHcFWEu4nmVdOwEPcHSIJHf3KNisGBpMIQkkqGyJttlYXO4nmVzM7ieZUl1NDLFaU8gS53E8yuZncTzKNkTSxGycgszuJ5lNLncTzKNkTSxQnIEudxPMrhe7ieZRS1NLUQ2BL3e8eZTczvePNHLEMsUDZw1CBZzr95RKVYnsyb75KEWrjRdBoZSLNtZrGwCZ4yZ/RQ61VxBOc8yh543ITmzaYCrUC3fYB7ne+eZUSo93vO5lTatKFGe1PRNwFtR3vO5lJEaxJSg2XtRnaPifiuhiM9vaPifiuhqJjYNrE8MRAxPDECAw1dyIoYnBihAORLIj5F3KhZAGRdyIwYnZVLIAyJZEfKu5VLCBaxGp0CdAu5Vb7Dw4dmnh9FRqMrxwtGjS4llntfRO2VgcO1ozdW951kgx3AFWDMFRnMKbAeIHwhUeOp5X5REW1HHwhSn7Mt2dfMeN7rkSyzk3bO7HDCKSSLDFbOpVDLg4HiDe3GdVBxGwAR2XmeDvqFFwtVzp6qoXRrlqTHkQJHepVevWpxLyQf8LTz3owzzj0wT0+OfaM9icIWkhw0MKOcOYmDC0OID6sPLQe+CJjipdB4AiAuhDVbo2kcvJpNsqb4MeaSaaS2VfZ9Orf2TxHzTG9Hqe9zvT6KxamPsT+JK+DJswLzo1x8AUJ9AjUEeK3zKDaYhqCcE1/aqCwNgUi1fPRY9Fxw+TBGmmFi3mMwtB1sgnut8FS1dnQ72YG4g39VbDUxkU5NLKJneqJsuOomYIurOvQLSTmv4fNCp9o9sz3K5Tvko2U6ZXsw5dYBDqUCNVcVGZpyWtoFX1mu0O5GMrJKNENzAhOapgEJpEpgIgvCE5qluYhOYiFMjtakjtYkoNZf1G9o+JXQxFe3tHxK6GpLKGMDE8NTw1ODULJQMNRqDGz2tEg1dDUrGXA7EYeDa4QcikBWdDAg0w8gaE6XtKpyZfGuTRiwPNJ7SlypZVanCUzvi8anx3gpv3Jh0ceO4/RItVj92O9Dl9U/9lblSyqx/hx3O9PoSmO2e4cPX5hOtRjfsrelyruLIWVXGxmuynIY4qC7COG7kQrTZVN4ECx13d/cVn1c4yhwzXoMco5OVXAq+GcSXOaCeMkaaWBR31HkQ5gI80ys9wqsBduMgaHXUIuKqVAxxgA5HQYNiAYtN1zjrlHsHo9h8EajqLaw6yDlLy8NgkwwE2F986K2x1YPAAlt94t/TKqthsxNN562qyoxwcYEgyOAiN2qvK+J7JOS497RTsgGlVaKRbm7UHcfjCg9crE1GFplsEtnSbkcYVFnW3Sq0zna100WVDFwp4xgIWfDkQVYCuljsohlLZ2JTn4uQqgVkZrwVX4y5ZSWMQAbpVse3unciUqBjQeap8Y1ukfvxTQjGTFy5JQQHE56roa2e4I7Oj7ou4A8PqUzB13MnLaVMqY50C91dJyXETNjWOXM+ygrUCwkTpayC4HxVvjXAwSBP71UGtdXwlfZnnGnwQKjUIsUxzENzVaVkNzEJzFNcxCexGyEZrEkdrUkbCXj23PifinBqK9tz4lOZTJVG4WnYMMTgxS6eCcRokcM4ahJvRZ4pfRGyLoYiuZGqcyFLIojKtRtNuaC6bQIlS2bdp5cppvAiNAVBrNBtrPfHyKknEMOtPkQfjC5urlJTqzs6GMXBugv8Twh1Lhcm4dvELrX4VwgVgLAX7jMptLCU6gMNIjiY5RKa/YzeB8oPxVCy5Ps0vDD6JQw9MmW1W6uMSPzCw1RW4J35Xj8u87tVUv2G3geQ+SGdikaOcPDMPmp5Ze0BYYrpl19zq77jtTccezqrBlECYCyowVYaVXfzH5ojfvY0quP8pSud+h4w2+zRPomZn0BhLGN/DdInsm3kqAY7GjUg+LPouHa2JiHNY4G12ual3D0SsOWdY0AXE34zn3xrYq2rU5ERM63hZr+JOzNcaLJbMQ8jUEGxHAlTmdIzvoO8nNKKkiUWtOlaCOcHcqits4NiTE9/wCiMOkVPfSqDyB+aZX21h3wHdaIIPsxoQYPda6eGVx6ZXkxRn/ZWA+6N3O/2/UJv3Lg70+hKP8AfcIfzuGmoP5STw70mVsJaKw3a9xJ4d8eQV61L/yMr0sf8f8A0jHAu4j+r6J9DDuaZJH9X0UhtOhaK7bRvF4md++RyUrD0aYIIqA+Y4RpKL1Mq7RI6SF9Nf7ADEmYRX4UVBFgeKDjaZFSRcETa/NScI5Wp/FNFW35OMugX8II0EniIhMds+oBPZHcrcVbJrXBJ5pFn8ePoo6mBc4gQJ48EHFbGeLgSFomkLtSoIuUy1Ek+BHpINcmNGBdMQV2ps0gStFUqN/Lbv1UKvk3l3or455MoeljFGcqUCNxUZzFoKpp8FGq4Vrh2RHer45fszPD9MpciStm4WmNSZ7kk3lQPBIuHUWiTcmSiYbuCj06oM6i/wA1PpMtoVlm6NEI88HHujVx8lFOIPj3qZkabkJr2jcEsWkPOMvsr31idUIlWNDCF5Pcj1MEBuVu9Lgo8UpKykeLK0bgnZLvcTGpDTBQX0bgd4Cu6gWTV02mbtCmlJDGUwBATwF1dWQ6A3KkGp0Ko2ptxtPsshzv6Qe87/D1QbS7CWjgIk2HFVWL2xh26uDjwaM3rp6rLY3HVap7Ti7gBp5NCYzAVDujxMKtSlL+iJJwj/Zl1V6R0vy0ifEhvwlBHSX/ANL+t30UAbKdvcPVRdo4V1JpdBeAJga+SLxZ0raEjnwt0mXzOkNPfTeOMFrviApNPauFdq6P8zB8QCFjG4sdV1xBay47QOaxg25oeE2jRqexUa7drBnwN1Vumu0XJRfTPR6WFpPEtLHd4APqFw7KZwby/VYalVc0y0lp4gwfRX2zukzxAqjOPeFnfQ+ieOVPsDi/Rc/wlvAeo+aYdjt4f1H6KyweKZUbmY4Eeo7iNyMQrEkKUTtiN4ev6IT9l0WmHEA+E+oC0MKLjMKHCbT56b9FKRCk+4Ug4EEHl8FaUCVDFEgkGJndm078xlSMM+CteONQMM5J5CU6YTWjvRHvEIYbNggWCngmmiSulhRaYMQFLolADgXcbIFTBHddWWV2+yBWcBvRU2LKC9lW/C8dUCpRcNylvxUmyI10xbmrVN+yl4l6KoYV3D1SV0MODuPoupvKL4SlOObJ8SrHDbTAAuqNjW5jMG5TxRE8FZNJlULj0aim8OEz5KdQxFMatjv1WZwkj2Xc1atrkjtCVmmjXCi4L6Uy2PJR8RWHBQ6YHeg1z3oR7DPoTADUHjKnu3KuwF333D6KwJukzv5UPpVUWwi4uSq3a+KgZBqdfDgs7NJF2xtTVlM20Lhv7h3KmpYEuu6w4b/0UyhQ3nyH1Ry1aMOm3fLJ/wAMWfVNfHH/ANBMptbZoA/e8705dhcIW9UlSOdK5O2NlcK7CaWFGwUzK9LqbqlSnSkimRLiGi4bJInXTcFmOh+zm4jFOqx+HTMjdpYA9/dzW46UPcKJawdp1p4A2knz03qH0KwrWYYloiXmfEE8f3osMsaeamdCORxw2D6WY7qcr2AZiRLYhuW8kkaHgo+xNr08QDlkOAlzTqJtM6ETKD9odMhtN0yCcoEx4wN505Kg6FtezE0iNKjagI3Q39QFnzYoyyV0asGRrDfZ6FgsQ+m4OYSCPUcCN4Wz2ZtFtVvBw1b8xxCx/VqVhXlhDmmCP3yVLjLFLbIthOOSO5GzTSg4PFCo0OHmOBRirQlXtKz/ABAPy+Sj50bbrTLCOBHKPqqsPK24+Yo5uXibJ4qKdgagF1TMqozXzvQlEeEi/OLbBDoPBRxiAqQ143ogM6O+STYWby2rPkSFBfSe7QKTs+JvcK3NRjG7vBLdDVuMy/COF5hHoOAFxKn47FscNLbhuVdUxRjKAB+9ydXIrbUfZJGLPBJV7KY3uSTbEL5DMOd2jB3n4qVRqcSo2K6sOMPBudyZSridy1MyxNFgntG5XFHENWTpYgbijjGEb1mlCzVCdI1ZqtO9RsQ4bis7/Eu9ObtCUIwZJzVGh2bq4+AU7eVXbEdNMu4uPpAVgDr4rPl5mzThVQQqj4BPBUNU5nElW20Hw315Kma6UcMLlb9CaibUaXsK1qflXGlEaVscjCoDDSTepUkFdAS7w7CN1KXVKUQkpvD4yvxWCbUADhMGR4prMI1rQ1ogKwe1Bc1LfNj7XVGL6eYHMym+/ZeIjibSe4An0QMBgh1uFLNBSrv83VB83HktJtxk0agPun0uoGw/7Fpi4Bb4CSY9VS1eUuTrFROLUSmJQXuKVGtDhOmhV+bH5I/qKMOR45fjLjZlXI7uNj8ir1UlKmrbDulo5Lno6ZC2+Pw2ng74g/RZ0laTbg/AqdwDuRHyWKOIK36fmJz9TxMs2VQiHEQqkVHHciMpvKsaK4yJf3i6m4J5JmFXYXDknSVc4ahA+qVpBT9kym4xay4ZPemCmUSmSEu0ZTGVqZaJIMblF62FOrvLtYUE01IsEonGmbwPRJGZhrXeB5EpI7kTYzz6vX7R8T8U1tfwUM4Sq57oadToCd6k09jVrdh1+4q9tlXCJNPEnuRRjSFLp9FqxaDYHgTfzTxsGu2RkmOEX8DKQO5EMYzuT2VeCP8AwurP9lHjCs8BgAHNL3tAkFzWtmWg7io2oq2wJuTpGh2CwihTsTInmSfmrBnzQhtClpP9L/ou/wASpcf6XLmykm7OrGO1URNsuhvjA+fyVRRddTts4lr8oZe53ERa2uu9V7GmdFqwJOPBh1Mmp8k6kUdgUNsoranFWONFSyJk9jF0shRqWIB0IPhdSW1hCrZdFpjxTlLqE3rRKPTqgqttlqigJoIL6MKwLghVo1Q3MOxFDtzD/gVY/u3/AO0rOdH3/g23O+IBWyxxBY5p3tcOYKxfRerNN4PEfA/RC35EFpbGSatcoJrJ9WiSUM4c9y2pmGSs1eyqmemx3dB8Rb5K1w28Kl6LtPVEcHH1A/VX1FoBud371WCaqTOlidwQPF08zHt95pHMFY2jgI1K3eVvEen1Wa2xgDTILCXAzruI8N11bgnXBTqIXUirfTA0TqVUp7Wu4eiY4PGjZ8FpMnBYUa5AsiU68lVfWVPcKYxtU7o8UtD7kaB9YDggVMXKrPurt7kRjAN6iiB5ESKlY8VGNe+qdP8Al8x+qjVKJO8IqIrmiW3GngUlBFJ3vJI7UTeZbBbSeyoXNcRDjynRavDdLrXaPIrE1Gdp1x7R+KI05d45q17Zdi7WjaVekzDByv8A9Lo9Een0pbpkPiXCfOAsMXd/JGphp97v/wCEHGBPkajG7bzuADoEaCNeBJaoOy9sNr46lRa1+jiS6WyAwm7REjRVGEwb3HstJg8QJ5qV0NaP4s4CCadB8wIDTLWlvebm6y6p8JLo06WPybfZus1AA9qnYlp9owRMjXUQeSTnUQ7LLM0gRDyQTpN7J1fBibNB3klodPdIR6WHadW31neY0m2v0CyUjbZQ9K6v3emHtbqYOU5YsTN5vaB4qkrdMcPTp5g51RwAhsQe+XG1lZ/aNjm0m0C9ge3rTLToRkd9V5PtnHNqve5ops0AYwFtu7vEazwUjNwfxK8mNT/sXT/tHxRkNbTbr+WSBJgXMeio8bt6tWeXvMvNiTYRuAAgBU9IAXJ/RPdw1GqkpOXbBHHGPSLfDVXsaX0n1WEn8RzHW7p3njeBqrjBbd2hU7FOvUDmguJc4SQ2IgEdo7o8+Kr+iuIZ+JTe4MAYarHOJjPTghlrdrS/DjC1dbEYDDYZ9N1NlSpJyEtIqOBk0qg0PVkQQQWiNztXBWFk/YPTKp2KeMZ1ZLA7OTkkGYJY+DeNy3eHOYS1zXDi0gjmF4g7pBVc0sec5c4Ek3dERlk7r6bt0Ky2N0jGHANOkOtykEhzgHOcdXtuDYiwANtQmjmrhgeO+UewmoQmipI1WSrdKgzDtBl1TLBqAuH4kAwAQSSCQCCALFH+zuo59JwL82VwEOsQ0gFkACCCDx+pdTTYjjJIuMXjKTCGPe0FxiJFrEy7gICyfQuhmfVYd0cw4gq36WbIxDn06tGCWvFiSNdTmmWgCdN4kDRZ7YG26OExFR9VznU3EsziHaus8mQCIBuOKWU6mmxlC4M1VfZxHeoTsI7gVebB6S4TFueyg+XN3OGXMPeZPtD6hZPpb076mq+hh6bSW9kvdPtED2WW04nXXSFo86SszeKT4NRgKT2sDWuyi575OtwJ+CkMwIJvJPkPqVQfZpi3VMNUzkuIrOBJM6tYdd+9a9mqyv5OzdDiKRXtwrCJBEcczfoi0MI2ZF++QfgEIbNjMA0QY0DRYOzDdffr3qZgcOGAgAAEkwIgTFrAcE0UkxZ24sX3ZNOECNicVTZlzva3M7K2TEu1hEcYEmwF1fvMXjIf3QJpwgUzwUHaW1KFC9aqxk6Am58BqVN5FjGuwQQjgQUHDdJsHUEtrt0cYNiA32iQdFmsR9pFEexSJveTEt3EW17ig8yXsPhb9GmqYJrRJIA7zAUfDClUY17Htc11mkHU8BO/uXnnSfpl17i3M7qTHZaQCCDIvBkrL19pwGimMu+JJvNiOB70n8h3wOtOq5PcPuSS8vwO2a1Zgc/H9SR2cs1AYGhOVpB111skj/I/Bf4/6VLsc9pqEaFzomCReN6K/bLg2YGaBGkCNTfefqqvE03kuGU+0fjP78UCpSe78pWZTl9mran6LL+P1bXJy6DdEbwNVGr7XqlzjmPbs7v8lCGGqA+ybp1HCVJnKYF+N1OA0dr4p7nSXG2kkwALCOC9J+x3BQ6tiXva1pApN9nMTIc6x0A7PjK81NA31HGy9X+xzCkYWsTacQYsDYU6fHxR7Gieg9dT/vf9v0SOIp/3h/fgE0Uj739LV3q/8R5BEJ539stMuw9KpTdIZVh3EB7SATO6QB4kcV5KdTO6J38PqvXftjb/AN1oiSZxDRyp1SvMaeDJebAAiJMR7QuYvA1QtIDK5z7x+5RSwkEgGGiSeA/ZUw7Ie6qWUgKpFw9s5SNzp8pRBgnskPBk2IBFiRIFvCVHJB2sqqbjBt2RE906TwUjNMybnf8ABaHowKeX7jiWuYyrXFSrVFsradN0AOIIid55Kv2ps6mzFvZT6w0G1Ia4DMXMgdoGwPdx7lG0CiGHQI18NZRaWJcycpIBjd7UEGx8eCD92IP5rcRuk/GylVcOCGtLXAiZJNpvEDQWgeSS4hRct2/UY1rDUa60wWgtBd7W7tSDF+Ktdl9L6rKjn1cuR5BLKbQBLWhrI4QGtF5WP+5vtAnSxI/fBSBhqtwWkGdbJd1ewVZedIumuIrNfRbAokNAGUA5Qd51k6GLKgxeId1MEXhm4+ClUqtRoIYDlOsb4Oh368CgY2sHuOdoaTHYFhaIga7vVHdbGjFUF6PbTqYSs2qwTUAOUXIu05swaRm3mDa3coOOxr6tR9RxJc9xc528uPwU/C7MqOBOR51AIiwOtzyUqn0Xe6/VvHCXMGmqnkj0LtZuvslp5cLUe5w/EqkgDtHstDTmjSSNNfRbltVvB58AR9Fk/s0wLqOGqU3NLfxS4AkGxa0E9nS4WkxmNoUoFWoxmbTM4CfCdVanasKJnXj3Knr9UOtXscragMGCbgGLHKXX8F1gaQCACCAQRoQdCCnQ3gEQniG2dq1qtR3WVWEh2YEODWlxEZ2szENgNGmisNo9M61bCmjUcwg5Wlws8kEHUGJtwTMV0MAqPvAD3RAcfzG3oo9bo3SY9ozOzTYNm0Sb+bSs/kX6LtQ7C9J8ZTpmkKzo/LOoA3NJvCpsQ+tUcalUue4AAOJJMC9r+isWU6bQWte4Q42DoEzF+SD1NOZkz/m3RHDgl8y/Q1EovvENtv1+nooZrX81dVsJRBs0/wAxKiVmUh+WL6QTPrqnjOIpXvfu5IppSQBc2HmpnY3U57o19Sp2Eq0xBNESNSPpa6kslLhAKWpTqtMQfKUlpqmJpTo/y0SSed/RKH1dnUcxOWYJ/M7iZ3pgpUo0HM/NErUCXOgDUjUxv71xuFO9rQO6ZniOCov7Ywz8GYDRPG/xlTXUHMyVGU2ua4NBa2lmJLiSTmG6IRNh1W0K/WOpNe0NcA0xqYg3aZi/Na//ALZ0YjqXRw7MKzHtXbIZrFmmKZLGFjspMdVmPtACY+u9bfoW6cPOTLNR9oLfZOWYJPu6yqVnS6h/5Xut1emvBFHTamLCg6O4t87K2M4L2GzZ9Z+5XDXHEfzLHDpzR30ag/lRGdOsPvp1fINP/wBlZ5I/ZAfT51SoKbKeUtzFxIcy0D/FPFV9TozOCo5hmDGuc95IDjm0MiM0Axbgrmn01oH/AKdbxyA/Byjbf242vS6vD58zjBLmObDRrBI1tCWck4vkZRbKDC4WmxuVjSAYmCZtYXnS55o2HwrGvD8pMODoIlstGUTv0nfvKBQwNcGLnvP7lWeH2c8+24+An42WH5X2WRjImVaTK9B7W06bajgQNI8SNealjZtIMaMlw0CbE2EaCyZSouAAbYDxUgZo1PwVq5VMs2kGps0TYN5RCC/ZQizaZ8h8wrQ0nnf6powrt8fvzS+NE2ooatAsP9k3kPioz60fkbyHwBWp+7u4TyQX7PB1aP34IPGLt/TMHGHQNHdYhU2K2Wx9Q1He0TJPeOHJb47CYdQR4Epj+jlI73DwKMYSXQu1/ZlRjanv/BbfC4XDENDcRmP/ALjZPkD+4VW/oxSP53/zD6IT+jFHfUMeLfmE8FT6F2yNXh8GWey6xINxPjv3oO2NksxIayp7LXBwguBkW1G4gqhw+zKdL2MVUb3B4jkBCk1MSIj71UEbxlk+JyrQp/hFFmkwVBtJjaYnK0BokkmALXNz5o+ccPVY841o/wDE1j/qj5IVTHUjrUrHic7h8CIR8n4TaaDE7Iovc5zmk5iSRJi//JUHEdHMHJeQGkiCcwEjta5h/jdzVEKuGEjK5wn8ziTzLimjG4dulIc/0Qv8JtX2V3SHY+FpuaaWIcQ7MXAZasOkXsOzqeSgtwOHy/2lYm3/AExfddXz9sUxpTZylMO3o0a0f6Qq3BtgcYmbxGBp6B7x/pb9UqOAb+QucTvDWyeUq+f0gdugeAagO29U948/oh4mLSKtuw6h1bUP/wAf/wCUQdHaoFhVHIeUkI9Ta7z+Y+v1Ud20HJvE/slIM3YdXhzeyf8Acko335y6h4EDbE1D+jJJM1OJ03yg1+j7mmGgu0vmA+ISSVbii3ahU9hVTEiNdXNOngEWr0adGoB7yI9AupIKKDtQxnRgiCajfAAmPNPp9HqQ9qo7yAEc5SSTqCBtQU7Hwg1c8x5fBqe2nhGxDByJ9SupIuKGUUg42jSG48k07TZ7p/fmkkptQbOHazdzVwbZHu+v6JJJ9iFc2cdtse4mu28dzQkkpSJbBu2486AD1THbdqboHkkkm2oFsC7bdQ/nPkB9EF+1X+87nCSSm1A3ME/ab/edzKC7aZ4nmUkkaRLYJ+0ihnHlJJRJAsGceUx2NKSSNEsYcW5cNdy6koAUuTTm4rqShBsHiuFvFJJSyHAxdDUklLIdyHuS6lJJQgjQ/dkkklLIf//Z",
    },
    {
      name: "Raidak River Bridge",
      period: "20th Century",
      significance: "Scenic bridge offering views of the Raidak River",
      image:
        "https://images.unsplash.com/photo-1721686029100-454502016eda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmFpZGFrJTIwUml2ZXIlMjBCcmlkZ2V8ZW58MHx8MHx8fDI%3D",
    },
  ];

  const hotels = [
    {
      name: "Sinclairs Retreat Dooars",
      category: "Luxury",
      rating: 5,
      price: "₹7000-12000",
      amenities: ["Swimming Pool", "Multi-cuisine Restaurant", "Spa"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ1KeKfTeKBrCp0FRunJkxRAn2aQPRekheJQ&s",
    },
    {
      name: "The Reserve Gorumara",
      category: "Boutique",
      rating: 4,
      price: "₹3000-6000",
      amenities: ["Jungle Safari", "Bonfire", "Nature Walk"],
      image:
        "https://q-xx.bstatic.com/xdata/images/hotel/max500/38887962.jpg?k=90b2cf61e80ccd269492f6db9e81db70604e4d748e155a25438eb7348827d55c&o=",
    },
    {
      name: "Prime Murti",
      category: "Budget",
      rating: 3,
      price: "₹1500-2500",
      amenities: ["Comfortable Rooms", "Restaurant", "Parking"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqCPKWGtszlnsNsd8blmtkHssYstgAbNQ3Xw&s",
    },
    {
      name: "Aranya Jungle Resort Lataguri",
      category: "Mid-Range",
      rating: 4,
      price: "₹2500-4500",
      amenities: ["Close to Gorumara", "Garden", "Dining"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZw9_RRAbwY7nSNPdUgFkuyG1AuUxMmUaHMQ&s",
    },
    {
      name: "Jaldapara Tourist Lodge",
      category: "Budget",
      rating: 3,
      price: "₹1000-2000",
      amenities: ["Basic Accommodation", "Food", "Proximity to Park"],
      image:
        "https://images.unsplash.com/photo-1697229607256-2f00764adec0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SmFsZGFwYXJhJTIwVG91cmlzdCUyMExvZGdlfGVufDB8fDB8fHwy",
    },
  ];

  const restaurants = [
    {
      name: "Lataguri Dhaba",
      cuisine: "Local Indian",
      rating: 4.2,
      priceRange: "₹",
      specialty: "Authentic Bengali and North Indian dishes",
      image:
        "https://content.jdmagicbox.com/v2/comp/jalpaiguri/c2/9999p3561.3561.130729124114.p2c2/catalogue/biki-dhaba-baradighi-jalpaiguri-dhaba-restaurants-75711owh2e-250.jpg",
    },
    {
      name: "Mistry Hotel & Restaurant",
      cuisine: "Indian, Chinese",
      rating: 4.0,
      priceRange: "₹€",
      specialty: "Varied menu with local and popular options",
      image:
        "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/inline-images/PORT_MUZIRIS01.jpg",
    },
    {
      name: "Dooars Delight Restaurant",
      cuisine: "Multi-cuisine",
      rating: 4.3,
      priceRange: "₹€",
      specialty: "Offers a mix of Indian and continental dishes",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOKJ7KtZPOJlEMRnHvjtbhs7zbCJAu0MdNIw&s",
    },
    {
      name: "Local Tea Stalls",
      cuisine: "Beverages, Snacks",
      rating: 4.5,
      priceRange: "₹",
      specialty: "Freshly brewed Dooars tea and local snacks",
      image: "https://images.unsplash.com/photo-1730303559375-bbd4f07db54e?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Jalpaiguri Dhaba",
      cuisine: "Indian",
      rating: 3.9,
      priceRange: "₹",
      specialty: "Simple and tasty home-style Indian food",
      image:
        "https://content.jdmagicbox.com/comp/jalpaiguri/f5/9999p3561.3561.170605001608.q6f5/catalogue/lama-hotel-oodlabari-jalpaiguri-restaurants-bqug0-250.jpg",
    },
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1559861388-45396ea73bd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R29ydW1hcmElMjBOYXRpb25hbCUyMFBhcmt8ZW58MHx8MHx8fDI%3D",
      alt: "Gorumara National Park",
    },
    {
      src: "https://images.unsplash.com/photo-1697434145017-a1573730d04a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SmFsZGFwYXJhJTIwTmF0aW9uYWwlMjBQYXJrfGVufDB8fDB8fHwy",
      alt: "Jaldapara National Park",
    },
    {
      src: "https://images.unsplash.com/photo-1727001977436-2ba5bac0af1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGVhJTIwR2FyZGVucyUyMG9mJTIwRG9vYXJzfGVufDB8fDB8fHwy",
      alt: "Tea Gardens of Dooars",
    },
    {
      src: "https://images.unsplash.com/photo-1668508120171-90fdcac2c022?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TXVydGklMjBSaXZlcnxlbnwwfHwwfHx8Mg%3D%3D",
      alt: "Murti River",
    },
    {
      src: "https://images.unsplash.com/photo-1566794774033-2de8ecd7b17c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QnV4YSUyMFRpZ2VyJTIwUmVzZXJ2ZXxlbnwwfHwwfHx8Mg%3D%3D",
      alt: "Buxa Tiger Reserve",
    },
    {
      src: "https://images.unsplash.com/photo-1623828168222-288542b2c276?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Suntalekhola",
    },
    {
      src: "https://images.unsplash.com/photo-1696170179241-8269a682c874?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Um9ja3klMjBJc2xhbmR8ZW58MHx8MHx8fDI%3D",
      alt: "Rocky Island",
    },
    {
      src: "https://images.unsplash.com/photo-1701632773090-705090bf5e38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hhcHJhbWFyaSUyMFdpbGRsaWZlJTIwU2FuY3R1YXJ5fGVufDB8fDB8fHwy",
      alt: "Chapramari Wildlife Sanctuary",
    },
    {
      src: "https://images.unsplash.com/photo-1675145257838-af7522381fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmluZHUlMjBWaWxsYWdlfGVufDB8fDB8fHwy",
      alt: "Bindu Village",
    },
  ];

  const souvenirs = [
    {
      name: "Dooars Tea",
      price: "₹100-500",
      description: "Locally grown aromatic tea leaves",
      image:
        "https://images.unsplash.com/photo-1647143378634-823137bbb515?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RG9vYXJzJTIwVGVhfGVufDB8fDB8fHwy",
    },
    {
      name: "Handicrafts by Local Tribes",
      price: "₹150-800",
      description: "Unique handmade crafts from indigenous communities",
      image:
        "https://3.imimg.com/data3/EK/VR/MY-5481511/tribal-handicrafts-500x500.jpg",
    },
    {
      name: "Jute Products",
      price: "₹50-300",
      description: "Bags, mats, and other items made from jute",
      image:
        "https://www.wedtree.com/cdn/shop/files/jute-bag-with-multicolored-diamond-design-wbg0143-bags-755.jpg?v=1729209540",
    },
    {
      name: "Local Spices",
      price: "₹80-400",
      description: "Freshly sourced spices from the region",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCes_OVJtBoIqUt50_zfGE2M7FjZBliTMtdQ&s",
    },
    {
      name: "Wildlife Artwork",
      price: "₹200-1000",
      description: "Paintings and sculptures inspired by Dooars wildlife",
      image:
        "https://www.shutterstock.com/image-illustration/aesthetic-wildlife-background-drawing-design-600nw-2532479751.jpg",
    },
    {
      name: "Bamboo Products",
      price: "₹100-500",
      description: "Utensils, decorative items, and baskets made from bamboo",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPST_HQoRGnwKLKIuZ1kXGBxfApuEcEgan8A&s",
    },
    {
      name: "Dooars Postcards",
      price: "₹20-80",
      description: "Postcards featuring scenic views and wildlife of Dooars",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRsQMlyoyxgBhlvY1ZDAtSBYR-2t07V1tvnQ&s",
    },
    {
      name: "Traditional Textiles",
      price: "₹300-1500",
      description: "Locally woven fabrics and garments",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIWqzObOTg-ykS7SSMbckElODu9HxOJxGHog&s",
    },
  ];

  const [activeTab, setActiveTab] = React.useState("attractions");

  const StarIcon = ({ filled = true }) => (
    <svg
      className={`w-4 h-4 ${
        filled ? "text-yellow-400 fill-current" : "text-gray-300"
      }`}
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon key={i} filled={i < rating} />
    ));
  };

  const TabButton = ({ id, label, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
        isActive
          ? "bg-blue-600 text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  );

  const Card = ({ children, className = "" }) => (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
    >
      {children}
    </div>
  );

  const Badge = ({ children, variant = "default" }) => {
    const baseClasses =
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
    const variants = {
      default: "bg-blue-100 text-blue-800",
      secondary: "bg-gray-100 text-gray-800",
      outline: "border border-gray-300 text-gray-700",
    };

    return (
      <span className={`${baseClasses} ${variants[variant]}`}>{children}</span>
    );
  };

  const Button = ({
    children,
    variant = "default",
    size = "default",
    onClick,
    className = "",
  }) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
      secondary:
        "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
      outline:
        "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500",
    };
    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      default: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
    };

    return (
      <button
        onClick={onClick}
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {children}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[32rem] ">
        {" "}
        {/* better than h-100, which is not a valid Tailwind class */}
        <img
          src="https://images.unsplash.com/photo-1668007598566-5166fa2073a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9vYXJzfGVufDB8MHwwfHx8Mg%3D%3D"
          alt="dooars forest"
          className="w-full h-full object-cover text-3xl font-bold brightness-75 "
        />
        <div className="absolute inset-0 flex items-center justify-center px-4 ">
          <div className="text-center text-gray-900 p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl max-w-2xl  ">
            <h1 className="text-5xl font-semibold mb-4 tracking-tight">
              <span className="inline-block border-b-4 border-amber-400 pb-2">
                Dooars, India
              </span>
            </h1>
            <p className="text-lg mb-6 text-gray-700 italic shadow-md opacity-90 mt-1">
              The Gateway to the Himalayas beckons your adventure
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button variant="secondary" size="sm">
                ❤ Save
              </Button>
              <Button variant="secondary" size="sm">
                📤 Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <div className="p-4 text-center">
              <div className="text-2xl mb-2">📍</div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-sm text-gray-600">
                Northern West Bengal, India
              </p>
            </div>
          </Card>
          <Card>
            <div className="p-4 text-center shadow-blue-900">
              <div className="text-2xl mb-2">🕒</div>
              <h3 className="font-semibold">Best Time</h3>
              <p className="text-sm text-gray-600">Oct - Mar</p>
            </div>
          </Card>
          <Card>
            <div className="p-4 text-center">
              <div className="text-2xl mb-2">⭐</div>
              <h3 className="font-semibold">Rating</h3>
              <p className="text-sm text-gray-600">4.7/5</p>
            </div>
          </Card>
          <Card>
            <div className="p-4 text-center">
              <div className="text-2xl mb-2">🌍</div>
              <h3 className="font-semibold">Language</h3>
              <p className="text-sm text-gray-600">Bengali, Hindi, Nepali</p>
            </div>
          </Card>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <TabButton
            id="attractions"
            label="Attractions"
            isActive={activeTab === "attractions"}
            onClick={setActiveTab}
          />
          <TabButton
            id="transport"
            label="Transport"
            isActive={activeTab === "transport"}
            onClick={setActiveTab}
          />
          <TabButton
            id="monuments"
            label="Monuments"
            isActive={activeTab === "monuments"}
            onClick={setActiveTab}
          />
          <TabButton
            id="hotels"
            label="Hotels"
            isActive={activeTab === "hotels"}
            onClick={setActiveTab}
          />
          <TabButton
            id="restaurants"
            label="Restaurants"
            isActive={activeTab === "restaurants"}
            onClick={setActiveTab}
          />
          <TabButton
            id="gallery"
            label="Gallery"
            isActive={activeTab === "gallery"}
            onClick={setActiveTab}
          />
          <TabButton
            id="souvenirs"
            label="Souvenirs"
            isActive={activeTab === "souvenirs"}
            onClick={setActiveTab}
          />
          <TabButton
            id="contact"
            label="Contact"
            isActive={activeTab === "contact"}
            onClick={setActiveTab}
          />
        </div>

        {/* Tab Content */}
        {activeTab === "attractions" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
            {attractions.map((attraction, index) => (
              <Card
                className="transition-transform hover:scale-105 hover:bg-gray-50"
                key={index}
              >
                <div className="relative">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-48 object-cover hoover"
                  />
                  <Badge className="absolute top-2 right-2 bg-blue-600 text-white">
                    {attraction.price}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">
                    {attraction.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {attraction.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <StarIcon />
                      <span>{attraction.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>🕒 {attraction.duration}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "transport" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="transition-transform hover:scale-105 hover:bg-gray-50">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  ✈ By Air
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Bagdogra Airport (IXB)</h4>
                    <p className="text-sm text-gray-600">
                      Nearest airport, about 80-100km from central Dooars
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Cooch Behar Airport (COH)</h4>
                    <p className="text-sm text-gray-600">
                      Smaller airport with limited connectivity, closer to
                      eastern Dooars
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="transition-transform hover:scale-105 hover:bg-gray-50">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  🚄 By Train
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">New Jalpaiguri (NJP)</h4>
                    <p className="text-sm text-gray-600">
                      Major railhead connecting to all parts of India
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Malbazar Junction</h4>
                    <p className="text-sm text-gray-600">
                      Closer railhead to specific parts of Dooars
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="transition-transform hover:scale-105 hover:bg-gray-50">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  🚌 Public Transport
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">State Buses</h4>
                    <p className="text-sm text-gray-600">
                      Connects major towns and attractions within Dooars
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Shared Jeeps/Sumos</h4>
                    <p className="text-sm text-gray-600">
                      Common for inter-village and tourist spot travel
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="transition-transform hover:scale-105 hover:bg-gray-50">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  🚗 By Car
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Car Rental</h4>
                    <p className="text-sm text-gray-600">
                      Available from Siliguri or Bagdogra for touring Dooars
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Self-Drive</h4>
                    <p className="text-sm text-gray-600">
                      Well-connected by national and state highways
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeTab === "monuments" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {monuments.map((monument, index) => (
              <Card
                className="transition-transform hover:scale-105 hover:bg-gray-50"
                key={index}
              >
                <img
                  src={monument.image}
                  alt={monument.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">
                    {monument.name}
                  </h3>
                  <Badge variant="outline" className="mb-2">
                    {monument.period}
                  </Badge>
                  <p className="text-sm text-gray-600">
                    {monument.significance}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "hotels" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel, index) => (
              <Card
                key={index}
                className="transition-transform hover:scale-105 hover:bg-gray-50"
              >
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{hotel.name}</h3>
                    <div className="flex">{renderStars(hotel.rating)}</div>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{hotel.category}</Badge>
                    <span className="text-sm font-semibold text-blue-600">
                      {hotel.price}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {hotel.amenities.map((amenity, i) => (
                      <Badge key={i} variant="outline">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "restaurants" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant, index) => (
              <Card
                className="transition-transform hover:scale-105 hover:bg-gray-50"
                key={index}
              >
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{restaurant.name}</h3>
                    <span className="text-lg font-bold text-blue-600">
                      {restaurant.priceRange}
                    </span>
                  </div>
                  <Badge variant="outline" className="mb-2">
                    {restaurant.cuisine}
                  </Badge>
                  <p className="text-sm text-gray-600 mb-3">
                    {restaurant.specialty}
                  </p>
                  <div className="flex items-center gap-1">
                    <StarIcon />
                    <span className="text-sm font-semibold">
                      {restaurant.rating}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "gallery" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-transform hover:scale-105 hover:bg-gray-50">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg "
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                  <span className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                    📷
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "souvenirs" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {souvenirs.map((souvenir, index) => (
              <Card
                key={index}
                className="transition-transform hover:scale-105 hover:bg-gray-50"
              >
                <img
                  src={souvenir.image}
                  alt={souvenir.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{souvenir.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {souvenir.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-blue-600">
                      {souvenir.price}
                    </span>
                    <Button size="sm">🛍 Buy</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

       {activeTab === "contact" && (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card className="transition-transform hover:scale-105 hover:bg-gray-50">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">
            Tourist Information
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xl">📞</span>
              <div>
                <p className="font-semibold">Tourist Hotline</p>
                <p className="text-sm text-gray-600">
                  +91 3564 255108 (West Bengal Tourism)
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">📧</span>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-sm text-gray-600">
                  dootour@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">🌐</span>
              <div>
                <p className="font-semibold">Website</p>
                <p className="text-sm text-gray-600">
                  www.wbtourism.gov.in (Official West Bengal Tourism)
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="transition-transform hover:scale-105 hover:bg-gray-50">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">
            Emergency Contacts
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xl">🚨</span>
              <div>
                <p className="font-semibold">Emergency Services</p>
                <p className="text-sm text-gray-600">
                  112 (All-in-one emergency number in India)
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">👮</span>
              <div>
                <p className="font-semibold">Police</p>
                <p className="text-sm text-gray-600">100</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">🏥</span>
              <div>
                <p className="font-semibold">Medical Emergency / Ambulance</p>
                <p className="text-sm text-gray-600">102 / 108</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>

    <Card className="transition-transform hover:scale-105 hover:bg-gray-50">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">
          Useful Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Currency</h4>
            <p className="text-sm text-gray-600">Indian Rupee (₹)</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Time Zone</h4>
            <p className="text-sm text-gray-600">
              Indian Standard Time (IST) - UTC+5:30
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Language</h4>
            <p className="text-sm text-gray-600">
              Bengali, Hindi (English understood in tourist areas)
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Electricity</h4>
            <p className="text-sm text-gray-600">
              230V, 50Hz (Type C, D & F plugs)
            </p>
          </div>
        </div>
      </div>
    </Card>
  </div>
)}
      </div>
    </div>
  );
};

export default HiddenGemsDooars;