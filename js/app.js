
'use strict'


var video = `<div class="your-video mt-5 pt-4">
<h2 class="text-dark my-3"> <span class="title">Mitti De Tibbe by KAKA</span> <span
	class="duration">(03:55)</span> </h2>

<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
	<ol class="navbar-nav me-auto mb-2 mb-lg-0">
	  <li class="nav-item">
		<a class="nav-link f-size-12 " aria-current="page" href="#">Download</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link f-size-12 download-path" href="#">Soundcloud</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link f-size-12 download-path" href="#">Mitti De Tibbe by KAKA (03:55)</a>
	  </li>
	</ol>
  </div>
</nav>
<div class="col-md-8 border rounded-top">
  <div class="card border-0">
	<div class="card-body">
	  <video controls="" class="embed-responsive-item"
		poster="https://i1.sndcdn.com/artworks-NVPAAbVFiUnRhPcB-FiKkTA-t500x500.jpg">
		<source id="embVideo" src="" type="video/mp4;">
	  </video>
	</div>
  </div>
</div>

<div class="col-md-8 bg-white border rounded-bottom">
  <div class="col-md-5 p-1">
	<div class="card border-success">
	  <div class="card-header">
		<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
		  focusable="false" width="1em" height="1em"
		  style="font-size: 24px; color: black; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet"
		  viewBox="0 0 512 512" class="iconify" data-icon="ion-musical-notes" data-inline="false">
		  <path fill="currentColor"
			d="M421.84 37.37a25.86 25.86 0 0 0-22.6-4.46L199.92 86.49A32.3 32.3 0 0 0 176 118v226c0 6.74-4.36 12.56-11.11 14.83l-.12.05l-52 18C92.88 383.53 80 402 80 423.91a55.54 55.54 0 0 0 23.23 45.63A54.78 54.78 0 0 0 135.34 480a55.82 55.82 0 0 0 17.75-2.93l.38-.13l21.84-7.94A47.84 47.84 0 0 0 208 423.91v-212c0-7.29 4.77-13.21 12.16-15.07l.21-.06L395 150.14a4 4 0 0 1 5 3.86v141.93c0 6.75-4.25 12.38-11.11 14.68l-.25.09l-50.89 18.11A49.09 49.09 0 0 0 304 375.92a55.67 55.67 0 0 0 23.23 45.8a54.63 54.63 0 0 0 49.88 7.35l.36-.12l21.84-7.95A47.83 47.83 0 0 0 432 375.92V58a25.74 25.74 0 0 0-10.16-20.63Z">
		  </path>
		</svg>
		<span class="ml-5">Audio</span>
	  </div>
	  <div class="card-body text-success">
		<div class="row">
		  <div class="col-md-12">
			<ul class="list-group" id="audioGroup">
			  <li class="list-group-item d-flex justify-content-between align-items-center">
				<a href="#" class="text-decoration-none text-info"> Download Audio</a>
				<span class="badge rounded-pill text-bg-info text-light">MP3</span>
				<span class="badge rounded-pill text-bg-success">3.59 MB</span>
			  </li>
			</ul>
		  </div>
		</div>
	  </div>
	</div>
  </div>
</div>
</div>`


window.addEventListener("DOMContentLoaded", () => {
	const btn = document.querySelector(".download-btn");
	var doneTimeout = null,
		resetTimeout = null;

	if (btn) {
		btn.addEventListener("click", function () {
			const runClass = "btn--running";
			const doneClass = "btn--done";
			// `.btn--running .btn__progress-fill` `stroke-dashoffset` duration in ms
			const submitDuration = 2000;
			const resetDuration = 1500;

			// fake the submission
			this.disabled = true;
			this.classList.add(runClass);

			clearTimeout(doneTimeout);
			clearTimeout(resetTimeout);

			doneTimeout = setTimeout(() => {
				this.classList.remove(runClass);
				this.classList.add(doneClass);

				// reset the button
				resetTimeout = setTimeout(() => {
					// this.disabled = false;
					this.classList.remove(doneClass);
					$('.video').append(video);
					$('.download-btn').addClass('disabled');
				}, resetDuration);

			}, 600 + submitDuration);
		});
	}
});

	// Form Validation

	(() => {

		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		const forms = document.querySelectorAll('.needs-validation')

		// Loop over them and prevent submission
		Array.from(forms).forEach(form => {
			form.addEventListener('submit', event => {
				if (!form.checkValidity()) {
					event.preventDefault()
					event.stopPropagation()
				}

				form.classList.add('was-validated')
			}, false)
		})
	})()

