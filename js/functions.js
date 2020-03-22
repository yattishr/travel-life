M.AutoInit();
// Side Nav
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
});

// Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
});

//Auto-complete
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
    data: {
        "Aruba": null,
        "Phuket": null,        
        "Bora-Bora": null,
        "Malaysia": null,
        "Seychelles": null,
        "Phillipines": null,
        "Hawaii": null,
        "Cancun, Mexico": null,
        "Singapore": null,
        "Rio de Janero": null,
        "Lake Como, Italy": null,
    }
});

//Material Boxed
const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});
