---
layout: foster-and-adoptive-sub
---
<div class="grid">
	<div class="col-9-12 contact-form">
		<p class="round">Fostering/Adoption Application</p>
		<form id="contact" action="" method="post">
			<fieldset>
				<input class="form-name" placeholder="First name" onfocus="this.placeholder = 'First name'" onblur="this.placeholder = 'First name'"  type="text" tabindex="1" required autofocus>
				<input class="form-name" placeholder="Last name" onfocus="this.placeholder = 'Last name'" onblur="this.placeholder = 'Last name'"  type="text" tabindex="2" required autofocus>
				<input class="form-info" placeholder="Your Email Address" onfocus="this.placeholder = 'Your Email Address'" onblur="this.placeholder = 'Your Email Address'" type="email" tabindex="3" required>
				<input class="form-info" placeholder="Your Zip Code" onfocus="this.placeholder = 'Your Zip Code'" onblur="this.placeholder = 'Your Zip Code'" type="text" pattern="\d{5}-?(\d{4})?" required>
				<select name="select">
					  <option value="fostering" selected>Fostering/Adoption</option>
					  <option value="donations">Donations</option>
					  <option value="career">Career Opportunities</option>
					  <option value="media">Media Inquiry</option>
					  <option value="other">Other</option>
				</select>
				<textarea class="form-info" placeholder="Message" onfocus="this.placeholder = 'Message'" onblur="this.placeholder = 'Message'" tabindex="5" required></textarea>
				<input name="submit" type="submit" id="contact-submit" data-submit="...Sending">
		  	</fieldset>
	  	</form> 
  	</div>
</div>