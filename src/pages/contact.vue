<template>
  <div>
    <Navbar />
    
    <div class="hero v-h-full overlay">
		<div class="img-bg rellax">
			<img src="images/bg.jpg" alt="Image" class="img-fluid">
		</div>
		<div class="container">
			<div class="row align-items-center v-h-full">

				<div class="col-lg-7 col-xxl-6 mx-auto text-center">
					<h1 class="heading-2 text-white mb-3" data-aos="fade-up">Contact Me</h1>
					<p data-aos="fade-up" data-aos-delay="200" class="text-white lead mb-4">Your life does not have to be fully into your passion.</p>
					<p data-aos="fade-up" data-aos-delay="300"><a href="" class="btn btn-primary-outline white me-4">Patchaporn</a></p>
				</div>

			</div>
		</div>

	</div>




	<div class="section section-contact m-md-5 px-md-5">
		<div class="container">
			<h2>Any question? Fill the contact form</h2>
			<p class="mb-4">Send us a message</p>

			<form action="" class="form-contact">
				<div class="row">
					<div class="col-lg-6">
						<div class="form-group">
							<input type="text" class="form-control" placeholder="Your name">
						</div>	
					</div>
					<div class="col-lg-6">
						<div class="form-group">
							<input type="email" class="form-control" placeholder="Your email">
						</div>
					</div>
				</div>

				<div class="col-lg-12">
					<div class="form-group">
						<textarea rows="10" cols="10" class="form-control" placeholder="Your message"></textarea>
					</div>
				</div>

				<div class="col-lg-6">
					<input type="submit" class="btn btn-black" value="Send message">
				</div>

			</form>
		</div>	
	</div>

	<div class="section">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 pe-lg-5" data-aos="fade-up">
					<span class="subheading d-inline-block mb-2">My business</span>
					<h2 class="mb-4">Sometime you don't need luck you just need money</h2>
					<p class="mb-5">
						If you want to have a exotic pet, contact us!</p>
					<p><a href="#" class="btn btn-black">Get started</a></p>
				</div>
				<div class="col-lg-8">
					<div class="row">
						<div class="col-6 col-lg-6 mt-5" data-aos="fade-up" data-aos-delay="100">
							<img src="images/S1.jpg" alt="Image" class="img-fluid rounded">
						</div>
						<div class="col-6 col-lg-6" data-aos="fade-up" data-aos-delay="200">
							<img src="images/S2.jpg" alt="Image" class="img-fluid rounded">
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
						<address>Bangkok University</address>
						<ul class="list-unstyled links">
							<li><a href="tel://11234567890">+1(123)-456-7890</a></li>
							<li><a href="tel://11234567890">+1(123)-456-7890</a></li>
							<li><a href="Patchaporn.sith@bumail.net">Patchaporn.sith@bumail.net</a></li>
						</ul>
					</div> <!-- /.widget -->
				</div> <!-- /.col-lg-4 -->
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
					</div> <!-- /.widget -->
				</div> <!-- /.col-lg-4 -->
				<div class="col-lg-4">
					<div class="widget">
						<h3>Links</h3>
						<ul class="list-unstyled links">
							<li><a href="#">Our Vision</a></li>
							<li><a href="#">About us</a></li>
							<li><a href="#">Contact us</a></li>
						</ul>

						<ul class="list-unstyled social">
							<li><a href="#"><span class="icon-instagram"></span></a></li>
							<li><a href="#"><span class="icon-twitter"></span></a></li>
							<li><a href="#"><span class="icon-facebook"></span></a></li>
							<li><a href="#"><span class="icon-linkedin"></span></a></li>
							<li><a href="#"><span class="icon-pinterest"></span></a></li>
							<li><a href="#"><span class="icon-dribbble"></span></a></li>
						</ul>
					</div> <!-- /.widget -->
				</div> <!-- /.col-lg-4 -->
			</div> <!-- /.row -->

      <div class="row mt-5">
          <div class="col-12 text-center">
            <p class="mb-0">
              Copyright &copy;

              . All Rights Reserved. &mdash; Be a cool kids with
              <a href="https://www.facebook.com/mercury.notyours">Patchaporn</a>
              <!-- License information: https://www.facebook.com/mercury.notyours/ -->
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
import Navbar from '../components/Navbar.vue'
export default {
    components: { Navbar }
};
</script>

<style>
</style>