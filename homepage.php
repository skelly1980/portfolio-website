<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Website</title>
    <link rel="stylesheet" href="public/css/style.css">
    <script src="https://kit.fontawesome.com/bb55158e46.js" crossorigin="anonymous"></script>
</head>

<body>
    <header>
        <div class="container flex">
            <div class="header-content slide-top">
                <h1>Shawn Kelly</h1>
                <h2>Web Development Specialist</h2>
                <p>Seeking an internship in the UX/UI field. Currently an honors student at University at Albany majoring in Informatics with a concentration in web design, Fluent in html, css, moderate Javascript fluency, php, and MySQL.</p>
            </div>
            <div class="header-image slide-right">
                <img src="src/assets/farmy-brown.png" alt="" width="300" height="175">
            </div>
        </div>
        <div class="contact">
            <div class="list-1">
                <ul>
                    <li><i class="fa-regular fa-envelope"></i><a href="#" target="_blank">skelly@yahoo.com</a></li>
                    <li><i class="fa-light fa-location-dot"></i><a href="#" target="_blank">Clifton Park, NY 12065</a></li>
                </ul>
            </div>
            <div class="list-2">
                <ul>
                    <li><i class="fa-solid fa-mobile-screen-button"></i><a href="#" target="_blank">203-460-4609</a></li>
                    <li><i class="fa-brands fa-linkedin"></i><a href="https://www.linkedin.com/feed/" target="_blank">linkedin</a></li>
                </ul>
            </div>
        </div>
    </header>

    <main>
        <section class="tabs">
            <div class="container">
                <div id="tab-1" class="tab-item tab-background">
                    <h2>Work Experience</h2>
                </div>
                <div id="tab-2" class="tab-item">
                    <h2>Skills</h2>
                </div>
            </div>
        </section>

        <section>
            <div class="tab-content">
                <div class="container">
                    <!-- Tab Content 1 -->
                    <div id="tab-1-content" class="tab-content-item show">
                        <div class="suny">
                            <h2 class="padding-block-2 text-white">SUNY Administration</h2>
                            <h3 class="padding-block-2">Web Developer Sep 2022 - Present <span>Albany, New York, United States</span></h3>
                            <ul>
                                <li>Blog design and Maintenance</li>
                                <li>CMS to create pages on SUNY.edu</li>
                            </ul>
                        </div>

                        <div class="Lowes padding-block-4">
                            <h2 class="padding-block-2 text-white">Lowes</h2>
                            <h3 class="padding-block-2">Cashier/Fulfillment Specailist Sep 2020 - Present <span>Halfmoon, New York, United States</span></h3>
                            <ul>
                                <li>
                                    Deliver a fast, friendly, and professional checkout experience.
                                </li>
                                <li>Scan and bag items accurately and efficiently.</li>
                                <li>Manage a cash register, payments, and exchanges</li>
                            </ul>
                        </div>
                        <div class="tightlines padding-block-4">
                            <h2 class="padding-block-2 text-white">Tightlines Fly Fishing</h2>
                            <h3 class="padding-block-2">General manager 2018-2020 <span>Parsippany, NJ 07054</span></h3>
                            <ul>
                                <li>
                                    Manage day to day operations including staff, customer service,
                                    inventory, presentation, and product knowledge
                                </li>
                                <li>Scheduling, reporting, tracking</li>
                                <li>Organize promotions and educational classes</li>
                                <li>Train associates to perform all duties</li>
                                <li>
                                    Develop customer relationships, expand markets, and increase
                                    sales
                                </li>
                                <li>
                                    Organize promotions; manage an email list of frequent customers.
                                </li>
                                <li>E-commerce and SEO maintenance.</li>
                                <li>
                                    Thoroughly understand company policies, procedures, and values;
                                    adhere to them; and ensure the staff’s compliance with them
                                </li>
                                <li>Plan and set budget for seasonal sales and marketing</li>
                            </ul>
                        </div>
                        <div class="orvis">
                            <h2 class="padding-block-2 text-white">Orvis Darien/Yonkers/Palisades</h2>
                            <h3 class="padding-block-2">Fishing Manager/Assistant Store Manager <span>2010-2018</span></h3>
                            <ul>
                                <li>Provide dedicated customer service</li>
                                <li>Payroll management</li>
                                <li>Hire, train, and coach staff</li>
                                <li>Make, reach, and exceed sales goals</li>
                                <li>
                                    Organize promotions; manage an email list of frequent customers.
                                </li>
                                <li>
                                    Master product features, and match products with customer needs
                                    and interests
                                </li>
                                <li>
                                    Represent Orvis to customers, community, and to enthusiast
                                    organizations like Trout Unlimited.
                                </li>
                                <li>
                                    Teach Fly Fishing 101 and 201 courses; develop and teach
                                    seminars and classes on specialized topics
                                </li>
                                <li>Manage day to operations</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Tab Content 2 -->
                    <div id="tab-2-content" class="tab-content-item">
                        <div class="suny">
                            <h2>SUNY Administration</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Repellendus nisi eveniet similique magnam vel necessitatibus!
                                Labore nostrum unde recusandae explicabo?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <script src="main.js"></script>
</body>

</html>