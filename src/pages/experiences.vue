<template>
  <div>
    <Navbar />

    <div class="hero v-h-full overlay">
      <div class="img-bg rellax">
        <img src="images/bg2.png" alt="Image" class="img-fluid" />
      </div>
      <div class="container">
        <div class="row align-items-center v-h-full">
          <div class="col-lg-7 col-xxl-6 mx-auto text-center">
            <h1 class="heading-2 text-white mb-3" data-aos="fade-up">
              Experiences
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              class="text-white lead mb-4"
            >
              Life's too mysterious to take too serious.
            </p>
            <p data-aos="fade-up" data-aos-delay="300">
              <a href="index.html" class="btn btn-primary-outline white me-4"
                >Patchaporn</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="section bg-light">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 text-center" data-aos="fade-up">
            <span class="subheading d-inline-block mb-2">{{ head }}</span>
            <h2>{{what}}</h2>
          </div>
        </div>
        <div class="row align-items-stretch">
          <div
            class="col-md-6 col-lg-4 mb-4 mb-lg-5"
            data-aos="fade-up"
            v-for="e in experiences"
            :key="e.gr"
          >
            <div class="unit-4 d-flex">
              <div class="unit-4-icon me-4">
                <span class="feather-briefcase"></span>
              </div>
              <div>
                <h3>{{ e.gr }}</h3>
                <p>{{ e.ge }}</p>
                <p>
                  <a href="#" class="more">{{ e.lm }}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section bg-light">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-4 mb-4 mb-lg-0"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div class="service grayscale">
              <div class="service-img">
                <a href="#"
                  ><img src="images/01.jpg" alt="Image" class="img-fluid"
                /></a>
              </div>
              <div class="service-inner">
                <span></span>
                <h3>9k124syz</h3>
                <p>Painting.</p>
                <p class="mb-0"><a href="#" class="more">Learn more</a></p>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 mb-4 mb-lg-0"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="service grayscale">
              <div class="service-img">
                <a href="#"
                  ><img src="images/02.jpg" alt="Image" class="img-fluid"
                /></a>
              </div>
              <div class="service-inner">
                <span></span>
                <h3>Rov</h3>
                <p>Complication.</p>
                <p class="mb-0"><a href="#" class="more">Learn more</a></p>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 mb-4 mb-lg-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="service grayscale">
              <div class="service-img">
                <a href="#"
                  ><img src="images/03.jpg" alt="Image" class="img-fluid"
                /></a>
              </div>
              <div class="service-inner">
                <span></span>
                <h3>My work</h3>
                <p>Painting.</p>
                <p class="mb-0"><a href="#" class="more">Learn more</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="widget">
              <h3>Contact</h3>
              <address>43 Raymouth Rd. Baltemoer, London 3910</address>
              <ul class="list-unstyled links">
                <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
                <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
                <li>
                  <a href="Patchaporn.sith@bumail.net"
                    >Patchaporn.sith@bumail.net</a
                  >
                </li>
              </ul>
            </div>
            <!-- /.widget -->
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <div class="widget">
              <h3>Sources</h3>
              <ul class="list-unstyled float-start links">
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Vision</a></li>
                <li><a href="#">Mission</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy</a></li>
              </ul>
              <ul class="list-unstyled float-start links">
                <li><a href="#">Partners</a></li>
                <li><a href="#">Business</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Creative</a></li>
              </ul>
            </div>
            <!-- /.widget -->
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <div class="widget">
              <h3>Links</h3>
              <ul class="list-unstyled links">
                <li><a href="#">Our Vision</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>

              <ul class="list-unstyled social">
                <li>
                  <a href="#"><span class="icon-instagram"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-twitter"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-facebook"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-linkedin"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-pinterest"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-dribbble"></span></a>
                </li>
              </ul>
            </div>
            <!-- /.widget -->
          </div>
          <!-- /.col-lg-4 -->
        </div>
        <!-- /.row -->

        <div class="row mt-5">
          <div class="col-12 text-center">
            <p class="mb-0">
              Copyright &copy; All Rights Reserved. &mdash; Be a cool kids with
              <a href="https://www.facebook.com/mercury.notyours">Patchaporn</a>
              <!-- License information: https://www.facebook.com/mercury.notyours -->
            </p>
          </div>
        </div>
      </div>
      <!-- /.container -->
    </div>
    <!-- /.site-footer -->
  </div>
</template>



<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
  data() {
    return {
      head: "Experiences",
      what: "What I can do for you?",
      experiences: [
        {
          gr: "Graphic Design",
          ge: "create visual concepts, using computer software or by hand, to communicate ideas that inspire, inform, and captivate consumers.",
          lm: "Learn more",
        },
        {
          gr: "Photoshop",
          ge: "Create Beautiful Images, Graphics, Paintings, And 3D Artwork.",
          lm: "Learn more",
        },
        {
          gr: "Blender",
          ge: "modeling, rigging, animation, simulation, rendering, compositing and motion tracking, even video editing and game creation.",
          lm: "Learn more",
        },
        {
          gr: "Drawings & Paintings",
          ge: "I have skills about art works.",
          lm: "Learn more",
        },
        {
          gr: "Writing Noval",
          ge: "I have my novals.",
          lm: "Learn more",
        },
        {
          gr: "Games",
          ge: "I have a lot of experiences about games.",
          lm: "Learn more",
        },
      ],
    };
  },
};
</script>

<style>
</style>