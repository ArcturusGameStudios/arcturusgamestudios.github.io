class MyHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
	<header>
<!--	Header section of the site-->
<!--		Start of logo-->
		<div class="logoH">
			<img src="img/logos/logo_large_left.png" alt="company logo">
		</div>
<!--		End of logo-->
		<div class="menuH">
<!--		This is the website menu buttons-->
			<a href="index.html" class="link">Home</a>
			<a href="" class="link">link2</a>
			<a href="" class="link">link3</a>
			<a href="about.html" class="link">link4</a>
		</div>
<!--		End of menu-->
<!--		This is the social media container-->
		<div class="social-containerH">
			<a href="https://store.steampowered.com/curator/42381870-Arcturus-Game-Studios/" id="steam" class="social-icons"></a>
			<a href="https://arcturus-game-studios.itch.io/" id="itch" class="social-icons"></a>
			<a href="https://www.facebook.com/Arcturus-Game-Studios-107352265169011/" id="facebook" class="social-icons"></a>
			<a href="https://www.instagram.com/arcturusgamestudios/" id="instagram" class="social-icons"></a>
			<a href="https://www.youtube.com/channel/UCr6nxrWyO2zAyEHuzWKJoEg" id="youtube" class="social-icons"></a>
		</div>
	<!--	End of socials-->
<!--	End of header section-->
	</header>
	<br>
	<br>
	<br>
		`
	}
}
customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
	<footer>
<!--	Footer section of the site-->
<!--		Start of logo-->
		<div class="logoF">
			<img src="img/logos/logo_small_icon_only_inverted.png" alt="company logo">
		</div>
<!--		End of logo-->
<!--		This is the social media container-->
		<div class="social-containerF">
			<a href="https://store.steampowered.com/curator/42381870-Arcturus-Game-Studios/" id="steam" class="social-icons"></a>
			<a href="https://arcturus-game-studios.itch.io/" id="itch" class="social-icons"></a>
			<a href="https://www.facebook.com/Arcturus-Game-Studios-107352265169011/" id="facebook" class="social-icons"></a>
			<a href="https://www.instagram.com/arcturusgamestudios/" id="instagram" class="social-icons"></a>
			<a href="https://www.youtube.com/channel/UCr6nxrWyO2zAyEHuzWKJoEg" id="youtube" class="social-icons"></a>
		</div>
	<!--	End of socials-->
		<div class="copyrightF">
			© Arcturus Game Studios
		</div>
<!--	End of footer section-->
	</footer>
	<br>
	<br>
	<br>
		`
	}
}
customElements.define('my-footer', MyFooter)