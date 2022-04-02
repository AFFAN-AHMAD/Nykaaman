const navbar = () => {
    return `   
    <section class="sec1">
      <div>Great Offers From The Best Brands</div>
      <div>
        <div><svg class = "navicon"xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
           <path d="M152 0H154.2C186.1 0 215.7 16.91 231.9 44.45L256 85.46L280.1 44.45C296.3 16.91 325.9 0 357.8 0H360C408.6 0 448 39.4 448 88C448 102.4 444.5 115.1 438.4 128H480C497.7 128 512 142.3 512 160V224C512 241.7 497.7 256 480 256H32C14.33 256 0 241.7 0 224V160C0 142.3 14.33 128 32 128H73.6C67.46 115.1 64 102.4 64 88C64 39.4 103.4 0 152 0zM190.5 68.78C182.9 55.91 169.1 48 154.2 48H152C129.9 48 112 65.91 112 88C112 110.1 129.9 128 152 128H225.3L190.5 68.78zM360 48H357.8C342.9 48 329.1 55.91 321.5 68.78L286.7 128H360C382.1 128 400 110.1 400 88C400 65.91 382.1 48 360 48V48zM32 288H224V512H80C53.49 512 32 490.5 32 464V288zM288 512V288H480V464C480 490.5 458.5 512 432 512H288z"/></svg> 
          Gift card</div>
        <div><svg class = "navicon1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z"/></svg>Help</div>
      </div>
    </section>
    <section class="sec2">
        <svg id="logos" class="logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="97" height="54" viewBox="0 0 97 54"><defs><path id="path-1" d="M.117.04H16.88v15.834H.117z"></path><path id="path-3" d="M.095.04h15.842v15.834H.095z"></path><path id="path-5" d="M.147.04h15.661v15.834H.147z"></path><path id="path-7" d="M.203.04H16.86v15.834H.203z"></path><path id="path-9" d="M.017.04h16.896v15.834H.017z"></path><path id="path-11" d="M0 .064h30.988V25H0z"></path><path id="path-13" d="M.242.064h26.702V25H.242z"></path><path id="path-15" d="M.041.064H25.79V25H.041z"></path></defs><g id="web" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="NYKAA-MAN-logo"><g id="Page-1" transform="translate(2 4)"><g id="Group-27"><g id="Group-3"><mask id="mask-2" fill="#fff"><use xlink:href="#path-1"></use></mask><path d="M12.706 15.874l-8.8-12.217v9.596c0 .318.031.57.093.758.063.188.145.332.248.434a.754.754 0 00.37.2c.143.032.291.049.445.049h.948v1.18H.117v-1.18h.947c.162 0 .312-.017.452-.05.14-.032.262-.098.369-.2a.998.998 0 00.248-.433c.058-.188.088-.44.088-.758V2.563c0-.296-.032-.532-.094-.71a.95.95 0 00-.253-.406.838.838 0 00-.37-.189 1.938 1.938 0 00-.44-.049H.117V.04h5.012l7.963 11.07V2.562c0-.296-.032-.532-.094-.71a.95.95 0 00-.253-.406.84.84 0 00-.369-.189 1.94 1.94 0 00-.44-.049h-.948V.04h5.893v1.17h-.947c-.155 0-.302.017-.44.05a.785.785 0 00-.37.2.993.993 0 00-.248.433c-.059.188-.088.44-.088.758v13.224h-2.082z" id="Fill-1" fill="#013243" mask="url(#mask-2)"></path></g><g id="Group-6" transform="translate(19)"><mask id="mask-4" fill="#fff"><use xlink:href="#path-3"></use></mask><path d="M3.846 15.874v-1.18h1.072c.186 0 .359-.011.519-.033.16-.022.3-.078.419-.168a.915.915 0 00.284-.406c.07-.18.106-.426.106-.736v-3.087L2.015 2.39a5.965 5.965 0 00-.318-.553c-.1-.151-.21-.272-.33-.362a1.218 1.218 0 00-.407-.2 2.097 2.097 0 00-.564-.066H.095V.04h7.658v1.17h-.39c-.462 0-.806.09-1.033.271a.878.878 0 00-.34.726c0 .188.035.391.106.612.07.22.15.424.24.612l1.696 3.26a19.982 19.982 0 011.005 2.307c.156-.39.337-.814.542-1.273.204-.458.433-.937.686-1.435l1.329-2.654a3.67 3.67 0 00.318-.817 2.58 2.58 0 00.072-.515c0-.382-.124-.66-.374-.834-.249-.173-.627-.26-1.133-.26h-.524V.04h5.984v1.17H15.5c-.194 0-.36.026-.497.076-.138.05-.268.141-.39.27a2.9 2.9 0 00-.38.532c-.13.224-.285.509-.463.855l-3.885 7.343v3.033c0 .325.033.578.1.758.067.18.158.318.273.412.116.094.25.151.402.173.153.022.318.033.497.033h1.128v1.18h-8.44z" id="Fill-4" fill="#013243" mask="url(#mask-4)"></path></g><g id="Group-9" transform="translate(38)"><mask id="mask-6" fill="#fff"><use xlink:href="#path-5"></use></mask><path d="M9.158 4.069c.238-.253.439-.482.601-.688.162-.206.293-.397.39-.574a2.31 2.31 0 00.211-.504c.043-.158.065-.314.065-.466 0-.245-.094-.415-.281-.509-.188-.093-.51-.14-.964-.14V.039h6.01v1.149c-.303 0-.59.047-.86.14-.271.094-.537.228-.797.401-.26.173-.516.38-.768.618-.253.238-.51.502-.77.79L9.072 6.354l4.127 6.552c.216.347.424.634.622.861.199.228.4.41.602.547.202.138.407.235.617.293.21.058.437.087.682.087h.087v1.18h-1.191a17.72 17.72 0 01-1.484-.054c-.426-.036-.8-.09-1.121-.163a3.81 3.81 0 01-.829-.276 2.708 2.708 0 01-.606-.395 3.207 3.207 0 01-.471-.515 7.693 7.693 0 01-.417-.633l-2.99-5.101-.985.769v3.747c0 .318.03.57.092.758.061.188.142.332.243.434a.739.739 0 00.369.2c.144.032.296.049.455.049h.931v1.18H.147v-1.18h.931c.16 0 .307-.015.444-.044a.797.797 0 00.363-.179.873.873 0 00.244-.4c.058-.177.086-.41.086-.699V2.563c0-.296-.028-.532-.086-.71a.913.913 0 00-.244-.406.82.82 0 00-.363-.189 1.926 1.926 0 00-.444-.049H.147V.04h7.657v1.17h-.931c-.16 0-.31.017-.455.05a.737.737 0 00-.369.2 1.074 1.074 0 00-.243.433c-.061.188-.092.44-.092.758v5.177l3.444-3.758z" id="Fill-7" fill="#013243" mask="url(#mask-6)"></path></g><g id="Group-12" transform="translate(56)"><mask id="mask-8" fill="#fff"><use xlink:href="#path-7"></use></mask><path d="M8.75 5.672a57.761 57.761 0 01-.495-1.647 43.72 43.72 0 01-.239-.86 20.28 20.28 0 01-.2-.818c-.066.223-.142.469-.229.736-.087.267-.18.542-.277.823l-.293.845c-.098.282-.19.552-.277.812L5.426 9.311h4.496L8.749 5.67zm-3.79 4.993l-.641 1.906c-.059.18-.118.391-.18.633a2.62 2.62 0 00-.092.634.774.774 0 00.315.645c.094.068.201.12.32.156.12.037.245.054.375.054h.934v1.181H.203v-1.18h.271c.196 0 .375-.022.538-.066a1.17 1.17 0 00.456-.243c.141-.12.275-.283.402-.493.126-.21.255-.48.385-.812L7.077.04h3.051L14.776 13.1c.109.311.223.569.342.775.12.206.25.368.39.487.142.12.292.204.452.255.159.05.326.075.5.075h.401v1.181h-7.34v-1.18h.868c.109 0 .22-.017.336-.05a.918.918 0 00.31-.15.803.803 0 00.223-.266.819.819 0 00.087-.39c0-.18-.022-.354-.066-.52a5.465 5.465 0 00-.13-.433l-.782-2.22H4.96z" id="Fill-10" fill="#013243" mask="url(#mask-8)"></path></g><g id="Group-15" transform="translate(76)"><mask id="mask-10" fill="#fff"><use xlink:href="#path-9"></use></mask><path d="M8.686 5.672a74.317 74.317 0 01-.744-2.507 20.043 20.043 0 01-.204-.818c-.066.223-.143.469-.231.736-.088.267-.182.542-.281.823l-.297.845c-.1.282-.193.552-.281.812L5.315 9.311h4.56l-1.19-3.64zM4.84 10.665l-.65 1.906c-.058.18-.119.391-.181.633a2.587 2.587 0 00-.094.634.774.774 0 00.32.645c.095.068.204.12.325.156.12.037.247.054.38.054h.947v1.181H.018v-1.18h.274c.199 0 .38-.022.546-.066a1.19 1.19 0 00.462-.243c.144-.12.28-.283.408-.493.128-.21.259-.48.39-.812L6.99.04h3.094L14.8 13.1c.11.311.225.569.347.775.12.206.253.368.396.487.143.12.296.204.457.255.162.05.33.075.507.075h.407v1.181H9.468v-1.18h.88c.111 0 .225-.017.342-.05a.936.936 0 00.314-.15.811.811 0 00.226-.266.81.81 0 00.088-.39c0-.18-.022-.354-.066-.52a5.303 5.303 0 00-.132-.433l-.793-2.22H4.84z" id="Fill-13" fill="#013243" mask="url(#mask-10)"></path></g></g><g id="Group-28" transform="translate(0 22)"><g id="Group-18"><mask id="mask-12" fill="#fff"><use xlink:href="#path-11"></use></mask><path d="M19.927 25v-1.86h.337c.36 0 .678-.022.954-.067.276-.046.504-.137.684-.273a1.23 1.23 0 00.406-.589c.09-.256.135-.594.135-1.015V3.51L15.468 25h-2.347L5.81 3.51v17.362c0 .501.06.899.177 1.194.118.296.288.523.507.683.22.16.487.264.802.315.315.051.676.077 1.08.077h.203V25H0v-1.86h1.452c.248 0 .479-.023.693-.068.213-.046.402-.14.565-.282.164-.142.29-.352.38-.63.09-.28.135-.646.135-1.101V4.038c0-.466-.045-.838-.135-1.117-.09-.279-.216-.492-.38-.64a1.275 1.275 0 00-.565-.298 2.985 2.985 0 00-.693-.077H0V.064h9.963l5.742 16.869L21.21.063h9.778v1.843h-1.453a2.98 2.98 0 00-.692.077c-.214.05-.4.156-.557.315-.158.16-.282.387-.372.682-.09.296-.135.694-.135 1.194v16.698c0 .501.045.899.135 1.194.09.296.214.523.372.683.157.16.343.264.557.315.213.051.444.077.692.077h1.453V25H19.927z" id="Fill-16" fill="#013243" mask="url(#mask-12)"></path></g><g id="Group-21" transform="translate(36)"><mask id="mask-14" fill="#fff"><use xlink:href="#path-13"></use></mask><path d="M13.941 8.933a120.29 120.29 0 01-.792-2.593c-.133-.454-.26-.906-.383-1.355-.122-.45-.229-.879-.322-1.288-.104.352-.226.74-.365 1.16-.14.42-.288.853-.444 1.296l-.47 1.33c-.157.444-.305.87-.444 1.28l-2.106 5.901h7.206l-1.88-5.73zm-6.075 7.863L6.84 19.798c-.093.284-.189.617-.287.998a4.059 4.059 0 00-.148.998c0 .227.046.426.14.596.092.171.214.31.365.418.15.109.322.19.513.248a2.1 2.1 0 00.6.085H9.52V25H.242v-1.86h.435c.314 0 .6-.034.862-.102.26-.069.505-.197.731-.384a3.12 3.12 0 00.644-.776c.203-.33.41-.757.618-1.28L11.261.065h4.89l7.45 20.57c.175.488.358.895.55 1.219.19.324.4.58.626.768.226.187.467.321.722.4.255.08.522.12.8.12h.645V25H15.177v-1.86h1.393c.174 0 .354-.026.54-.077.185-.051.35-.13.495-.239.145-.108.264-.247.357-.418.093-.17.14-.375.14-.613 0-.285-.035-.557-.105-.82a8.6 8.6 0 00-.209-.682l-1.253-3.496H7.866z" id="Fill-19" fill="#013243" mask="url(#mask-14)"></path></g><g id="Group-24" transform="translate(67)"><mask id="mask-16" fill="#fff"><use xlink:href="#path-15"></use></mask><path d="M19.378 25L5.86 5.76v15.112c0 .501.048.899.144 1.194.095.296.222.523.38.683.158.16.347.264.567.315.22.051.448.077.685.077h1.455V25H.042v-1.86h1.454c.248 0 .48-.026.694-.077.214-.051.403-.156.566-.315.164-.16.29-.387.381-.683.09-.295.136-.693.136-1.194V4.038c0-.466-.049-.838-.144-1.117-.096-.279-.226-.492-.39-.64a1.277 1.277 0 00-.566-.298 2.915 2.915 0 00-.677-.077H.041V.064H7.74l12.23 17.431V4.038c0-.466-.047-.838-.143-1.117-.096-.279-.226-.492-.39-.64a1.278 1.278 0 00-.566-.298 2.917 2.917 0 00-.677-.077h-1.455V.064h9.051v1.842h-1.454c-.238 0-.463.026-.677.077a1.2 1.2 0 00-.567.315c-.164.16-.29.387-.38.682-.091.296-.136.694-.136 1.194V25h-3.197z" id="Fill-22" fill="#013243" mask="url(#mask-16)"></path></g></g></g></g></g></svg>
        <div>
              <p>CATEGORIES</p>
              <p>BRANDS</p>
              <p>GROOMING ADVICE</p>
      
          </div>

        <div>
          <svg class="searchicon"width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 19.97L16.3 14.73C17.36 13.44 17.99 11.79 17.99 9.99C17.99 5.85 14.64 2.5 10.5 2.5C6.35 2.5 3 5.85 3 9.99C3 14.13 6.35 17.48 10.49 17.48C12.29 17.48 13.94 16.84 15.23 15.79L20.47 21.03C20.62 21.18 20.81 21.25 21 21.25C21.19 21.25 21.38 21.18 21.53 21.03C21.83 20.74 21.83 20.26 21.54 19.97ZM10.49 15.98C7.19 15.98 4.5 13.29 4.5 9.99C4.5 6.69 7.19 4 10.49 4C13.79 4 16.48 6.69 16.48 9.99C16.48 13.3 13.8 15.98 10.49 15.98Z" fill="black"></path></svg>
          <input type="text"  placeholder="Search on Men" id="searching">
        </div>
        <div>
          <div id="account"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9 21.5001C19.2866 21.5001 19.6 21.1867 19.6 20.8001C19.6 20.4135 19.2866 20.1001 18.9 20.1001C18.5134 20.1001 18.2 20.4135 18.2 20.8001C18.2 21.1867 18.5134 21.5001 18.9 21.5001Z" fill="#001325" fill-opacity="0.92"></path><path d="M15.9 21.5001C16.2866 21.5001 16.6 21.1867 16.6 20.8001C16.6 20.4135 16.2866 20.1001 15.9 20.1001C15.5134 20.1001 15.2 20.4135 15.2 20.8001C15.2 21.1867 15.5134 21.5001 15.9 21.5001Z" fill="#001325" fill-opacity="0.92"></path><path d="M12.9 21.5001C13.2866 21.5001 13.6 21.1867 13.6 20.8001C13.6 20.4135 13.2866 20.1001 12.9 20.1001C12.5134 20.1001 12.2 20.4135 12.2 20.8001C12.2 21.1867 12.5134 21.5001 12.9 21.5001Z" fill="#001325" fill-opacity="0.92"></path><path d="M12 4C12.7 4 13.3 4.2 13.8 4.7C14.3 5.2 14.5 5.9 14.5 6.6V6.7C14.5 7.4 14.3 8.2 13.8 8.7C12.8 9.7 11.2 9.7 10.2 8.7C9.69998 8.2 9.39998 7.5 9.39998 6.8V6.7C9.29998 5.3 10.3 4.1 11.7 4C11.8 4 11.9 4 12 4ZM12 2.5C9.79998 2.5 7.99998 4.3 7.99998 6.5C7.99998 6.6 7.99998 6.6 7.99998 6.7V6.8C7.89998 9 9.59998 10.9 11.8 11C11.9 11 11.9 11 12 11C13.1 11 14.1 10.6 14.9 9.8C15.7 9 16.1 7.9 16 6.8V6.6C16 5.5 15.6 4.4 14.8 3.6C14.1 2.9 13 2.5 12 2.5Z" fill="#001325" fill-opacity="0.92"></path><path d="M9.79999 21.5002H5.79999C5.39999 21.5002 4.99999 21.3002 4.69999 21.0002C4.39999 20.7002 4.29999 20.2002 4.39999 19.8002C4.99999 15.4002 8.99999 12.4002 13.4 13.0002C16.2 13.4002 18.6 15.2002 19.7 17.8002C19.8 18.2002 19.6 18.6002 19.2 18.8002C18.8 18.9002 18.4 18.8002 18.3 18.4002C17 15.1002 13.2 13.4002 9.89999 14.7002C7.69999 15.6002 6.09999 17.6002 5.79999 20.0002H9.79999C10.2 20.0002 10.6 20.3002 10.6 20.8002C10.6 21.3002 10.2 21.5002 9.79999 21.5002Z" fill="#001325" fill-opacity="0.92"></path></svg>
                 <div id="user">Account</div>
                  </div> 
                  <svg width="24" id="cart" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 7.2H16.2V6.9C16.3 4.5 14.4 2.5 12 2.5C9.6 2.6 7.8 4.5 7.8 6.9V7.2H3.5C2.9 7.2 2.5 7.6 2.5 8.2V16.4C2.5 19.2 4.7 21.4 7.5 21.4H16.5C19.3 21.4 21.5 19.2 21.5 16.4V8.2C21.5 7.7 21.1 7.2 20.5 7.2ZM9.3 6.9C9.3 5.4 10.5 4.1 12 4C13.5 4.1 14.7 5.4 14.7 6.9V7.2H9.3V6.9ZM20 16.5C20 18.4 18.4 20 16.5 20H7.5C5.6 20 4 18.4 4 16.5V8.7H7.8V10.7C7.6 10.9 7.5 11.2 7.5 11.4C7.5 12 8 12.4 8.5 12.4C9 12.4 9.5 11.9 9.5 11.4C9.5 11.1 9.4 10.9 9.2 10.7V8.7H14.6V10.6C14.4 10.8 14.3 11.1 14.3 11.4C14.3 12 14.7 12.5 15.3 12.5C15.9 12.5 16.4 12.1 16.4 11.5C16.4 11.2 16.3 11 16.1 10.8V8.8H20V16.5Z" fill="black"></path></svg></div>
                 
    </section>`
}
const menu = () => {
  return `  <div class = "category"><a href="#">Shaving</a>
  <div class="subcategory">
          <div class="cat1"> <h5>SHAVING APPLIANCES</h5>
              
                  <p><a href="#">Shavers</a></p>
                  <p><a href="#">Trimmers</a></p>
              
          </div>
          <div class="cat2"> <h5>SHAVING TOOLS & ACCESSORIES</h5> 
              
                  <p><a href="#">Razors & Castridges</a></p>
                  <p><a href="#">Shaving Brushes</a></p>
              
          </div>
          <div class="cat1"> <h5>SHAVING CREAMS & LOTIONS</h5>
              
                  <p onclick="detaSort(event='Shaving Cream')"><a href="#">Shaving Creams</a></p>
                  <p onclick="detaSort(event='ShavingFoam')"><a href="#">Shaving Foams, Gels & Soaps</a></p>
                  <p onclick="detaSort(event='AfterShave')"><a href="#">Pre Shave & After Shave Lotions</a></p>
              
          </div>
          <div class="cat2"><h5>SHAVING KITS</h5></div>
  </div>
  </div>

  <div class="category"> <a href="#">Beard Care</a>
      <div class="subcategory">
          <div class="cat1" > <h5>BEARD CARE</h5>
              
              <p><a href="#">Beard Oil</a></p>
              <p><a href="#">Moustache Oil</a></p>
              <p><a href="#">Beard Softener</a></p>
              <p><a href="#">Beard Colour</a></p>
              <p><a href="#">Beard Serum</a></p>
              <p><a href="#">Beard Cream</a></p>
              <p><a href="#">Beard Balm & Butter</a></p>
              <p><a href="#">Beard Wash</a></p>
          
            
            </div>
            <div class="cat2"> <h5>BEARD STYLING</h5>
            
              <p><a href="#">Beard & Moustache Wax</a></p>
              <p><a href="#">Beard Comb</a></p>
              <p><a href="#">Beard Gel</a></p>
        
            </div>
            <div class="cat1"> <h5>BEARD KITS</h5></div>
         </div>
  </div>

  <div class="category"><a href="#">Hair</a>
      <div class="subcategory">
          <div class="cat1"><h5>HAIR CARE</h5>
           
              <p><a href="#">Shampoo</a></p>
              <p><a href="#">Conditioner</a></p>
              <p><a href="#">Hair Oils</a></p>
           
          </div>
          <div class="cat2"> <h5>HAIR STYLING</h5>
            
                  <p><a href="#">Hair gel & Waxes</a></p>
                  <p><a href="#">Hair Color</a></p>
            
          </div>
          <div class="cat1"><h5>HAIR BRUSHES & DRYERS</h5>
            
                  <p><a href="#">Hair Brushes & Combs</a></p>
                  <p><a href="#">Hair Dryers</a></p>
             
          </div>
          <div class="cat2"><h5>SHOP BY CONCERN</h5>
          
                  <p><a href="#">Hairfall & Thinning</a></p>
                  <p><a href="#">Dry & Frizzy Hair</a></p>
                  <p><a href="#">Dandruff</a></p>
                  <p><a href="#">Dull Hair</a></p>
           
          </div>
          <div class="cat1">
              <h5>PROFESSIONAL HAIR CARE PRODUCTS</h5>
          </div>
      </div>
  </div>

  <div class="category"><a href="#">Skincare</a>
      <div class="subcategory">
          <div class="cat1"> <h5>FACE</h5>
             
                  <p><a href="#">Face Wash</a></p>
                  <p><a href="#">moisturisers</a></p>
                  <p><a href="#">Sunscreen</a></p>
                  <p><a href="#">Masks & Peels</a></p>
                  <p><a href="#">Scrubs & Exfoliators</a></p>
             
          </div>
          <div class="cat2"><h5>MAKEUP FOR MEN</h5>
             
                  <p><a href="#">Primer</a></p>
                  <p><a href="#">Concealer</a></p>
                  <p><a href="#">Foundation</a></p>
                  <p><a href="#">Mattifying Face Powder</a></p>
                  <p><a href="#">BB & CC Cream</a></p>
                  <p><a href="#">Brows</a></p>
                  <p><a href="#">Tools & Brushes</a></p>
             
          </div>
          <div class="cat1"><h5>SKIN CARE KITS</h5></div>
          <div class="cat2"><h5>SHOP BY CONCERN</h5>
              
                  <p><a href="#">Dry Skin</a></p>
                  <p><a href="#">Oil Removal</a></p>
                  <p><a href="#">Acne</a></p>
                  <p><a href="#">Blackheads</a></p>
                  <p><a href="#">Tan Removal</a></p>
                  <p><a href="#">Dark Spots</a></p>
              
          </div>
      </div>
  </div>

  <div class="category"><a href="#">Personal Care</a> 
      <div class="subcategory" id="pcare">
          <div class="cat1"><h5>BATH & BODY</h5>
         
                  <p><a href="#">Bath & body</a></p>
                  <p><a href="#">Body Wash/ Shower Gels</a></p>
                  <p><a href="#">Soaps</a></p>
                  <p><a href="#">Talc & Intimate Care</a></p>
                  <p><a href="#">Body Lotions</a></p>
          
          </div>
          <div class="cat2"><h5>HAIR CLIPPERS & BODY GROOMERS</h5></div>
          <div class="cat1"> <h5>DENTAL CARE</h5>
          
                  <p><a href="#">Toothpaste</a></p>
                  <p><a href="#">Toothbrush</a></p>
                  <p><a href="#">Floss & Tongue Cleaners</a></p>
                  <p><a href="#">Mouthwash</a></p>
                  <p><a href="#">Mouth Freshner</a></p>
        
          </div>
          <div class="cat2"><h5>HAND CARE</h5>
          
                  <p><a href="#">Handwash </a></p>
                  <p><a href="#">Hand Sanitizer </a></p>
                  <p><a href="#">Hand Cream</a></p>
        
          </div>
          <div class="cat1"><h5>FOOT CARE</h5>
              
                  <p><a href="#">Foot Cream</a></p>
                  <p><a href="#">Foot Scrub</a></p>
            
          </div>
          <div class="cat2"><h5>HOME & HEALTH</h5>
          
              <p><a href="#">Safety Essentials</a></p>
              <p><a href="#">Masks & Gloves</a></p>
              <p><a href="#">Air Freshners</a></p>
              <p><a href="#">Household Supplies</a></p>
        
          </div>
      </div>
  </div>
  
  <div class="category"><a href="#">Perfumes & Deos</a>
      <div class="subcategory">
              <div class="cat1"><h5>PERFUMES (EDT/EDP)</h5></div>
              <div class="cat2"> <h5>BODY MIST/ SPRAY</h5></div>
              <div class="cat1"> <h5>DEODORANTS/ ROLL-ONS</h5></div>
              <div class="cat2"> <h5>COLOGNES & AFTER SHAVES</h5></div>
      </div>
  </div>

  <div class="category"><a href="#">Health & Nutrition</a>
      <div class="subcategory" id="health">
          <div class="cat1"> <h5>HEALTH SUPPLEMENTS</h5>
              
                  <p><a href="#">Multivitamins</a></p>
                  <p><a href="#">Calcium & Vitamin D</a></p>
                  <p><a href="#">Magnesium & Zinc</a></p>
                  <p><a href="#">Omega 3 & Fish Oil </a></p>
                  <p><a href="#">Immunity Boosters & Vitamin C</a></p>
                  <p><a href="#">Melatonin (sleep)</a></p>
                  <p><a href="#">Biotin (Hair Supplement)</a></p>
                  <p><a href="#">Collagen (Skin & Bones)</a></p>
            
            </div>
            <div class="cat2"><h5>SPORTS NUTRITION</h5>
              
                  <p><a href="#">Whey Protein </a></p>
                  <p><a href="#">Whey Isolate Protein </a></p>
                  <p><a href="#">Plant Protein</a></p>
                  <p><a href="#">BCAA & Other Muscle Support</a></p>
                  <p><a href="#">Weight & Mass Gainers</a></p>
            
            </div>
            <div class="cat1"><h5>WEIGHT MANAGEMENT</h5>
              
                  <p><a href="#">Apple Cider Vinegar</a></p>
                  <p><a href="#">Green Tea</a></p>
                  <p><a href="#">Green Coffee</a></p>
                  <p><a href="#">Fat Burner (Capsules & Gummies)</a></p>
                  <p><a href="#">Slimming Shakes & Juices</a></p>
                  <p><a href="#">Sugar Substitutes</a></p>
            
              </div>
            <div class="cat2"><h5>HEALTH FOODS</h5>
              
                  <p><a href="#">Dry Fruits, Nuts & Berries</a></p>
                  <p><a href="#">Edible Seeds</a></p>
                  <p><a href="#">Black Tea & Coffee</a></p>
                  <p><a href="#">Herbal Teas</a></p>
                  <p><a href="#">Breakfast Cereals</a></p>
                  <p><a href="#">Peanut Butter & Protein Snacks</a></p>
                  <p><a href="#">Other Health Foods</a></p>
            
            </div>
            <div class="cat1"><h5>WELLNESS EQUIPMENTS</h5>
              
                  <p><a href="#">Weighing Scales</a></p>
                  <p><a href="#">Fitness</a></p>
                  <p><a href="#">Face Steamers</a></p>
            
            </div>
            <div class="cat2"><h5>AYURVEDA & HERBS</h5>
              
                  <p><a href="#">Ashwagandha</a></p>
                  <p><a href="#">Neem (Blood Purifier)</a></p>
                  <p><a href="#">Amla(Immunity,Skin)</a></p>
                  <p><a href="#">Aloe Vera (Liver, Skin)</a></p>
                  <p><a href="#">Milk Thistle(Liver)</a></p>
                  <p><a href="#">Wheatgrass(Detox)</a></p>
                  <p><a href="#">Tulsi</a></p>
                  <p><a href="#">Giloy & Guduchi (Immunity)</a></p>
                  <p><a href="#">Turmeric (Anti Inflamatory)</a></p>
            
            </div>
            <div class="cat1"><h5>SHOP BY CONCERN</h5>
              
                  <p><a href="#">Diabetes</a></p>
                  <p><a href="#">Digestion (Gut Health)</a></p>
                  <p><a href="#">Organs - Liver, Heart, Kidney</a></p>
                  <p><a href="#">Safety & First Aid</a></p>
                  <p><a href="#">Weakness & Vitality</a></p>
                  <p><a href="#">Mental Wellness</a></p>
                  <p><a href="#">Blood Pressure</a></p>
            
            </div>
      </div>
  </div>

  <div class="category"><a href="#">LUXE</a>
      <div class="subcategory" id="lux">
          <div class="cat1"><h5>BATH & BODY</h5></div>
          <div class="cat2"><h5>HAIR</h5> </div>
          <div class="cat1"><h5>FRAGRANCE</h5></div>
          <div class="cat2"><h5>SKIN</h5></div>
      </div>
  </div>

  
  <div class="category"><a href="#">Gadgets & Tech</a>
     <div class="subcategory" id="gadgets">
          <div class="cat1"><h5>HEADPHONES</h5></div>
          <div class="cat2"><h5>SPEAKERS</h5></div>
          <div class="cat1"><h5>SMART WATCHES & ACTIVITY TRACKERS</h5></div>
          <div class="cat2"><h5>COMPUTER PERIPHERALS</h5></div>
          <div class="cat1"><h5>POWER BANKS</h5></div>
          <div class="cat2"><h5>CABLES & CHARGERS</h5></div>
          <div class="cat1"><h5>SMART HOME DEVICES</h5></div>
          <div class="cat2"><h5>CASES & COVERS</h5></div>
          <div class="cat1"><h5>CAMERA & ACCESSORIES</h5></div>
     </div>
  </div>

  
  <div class="category"><a href="#">Lifestyle</a>
      <div class="subcategory" id="life">
          <div class="cat1"><h5>FOOTWEAR</h5></div>
          <div class="cat2"><h5>WATCHES</h5></div>
          <div class="cat1"><h5>ACTIVEWEAR & CLOTHING</h5></div>
          <div class="cat2"><h5>FASHION ACCESSORIES</h5></div>
          <div class="cat1"><h5>SUNGLASSES</h5></div>
          <div class="cat2"><h5>BAGS & BAGPACKS</h5></div>
      </div>
  </div>

  <div class="category"><a href="#">Pet Care</a>
      <div class="subcategory" id="petcare">
          <div class="cat1"><h5>CLEANING & HYGEINE</h5></div>
          <div class="cat2"><h5>PET GROOMING</h5></div>
          <div class="cat1"><h5>FOOD & TREATS</h5></div>
          <div class="cat2"><h5>PET ACCESSORIES</h5></div>
      </div>
  </div>

  <div><img src="../IMAGES/OFFER.PNG" alt=""></div>

`
}
export { navbar, menu }