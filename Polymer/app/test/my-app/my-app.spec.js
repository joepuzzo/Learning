describe('description', function () {

    before( function(){
        document.body.innerHTML = window.__html__;//['my-app.html'];
        console.log(window.__html__);
    });

    it('should be true', function () {
        console.log( document.getElementById('hello') );
        expect(document.getElementById('hi')).to.equal(true);
    })

})
