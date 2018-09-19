function matalanCheckout(){
    let paymentOptions = document.querySelectorAll('.payment-options a');

    function deactivateOthers(elems) {
        elems.forEach((elem) => {
            elem.classList.remove('active');
        });
    }

    paymentOptions.forEach((paymentOption) => {
        paymentOption.addEventListener('click', function() {
            deactivateOthers(paymentOptions, paymentOption);
            paymentOption.classList.add('active');
        });
    });
}
matalanCheckout();