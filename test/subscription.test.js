var chai = require( 'chai' );
var expect = chai.expect;
var Subscription = require( '../lib/subscription' );

describe( "Subscription", function () {

    describe( "status related", function () {

        beforeEach(function () {
            this.subscription = new Subscription();
        });

        it( "should be unsubscribed after construction", function () {
            expect(
                this.subscription.subscribed()
            ).to.be.equal( 0 );
        });

        it( "should be subscribed after `subscribe`", function () {
            this.subscription.subscribe();

            expect(
                this.subscription.subscribed()
            ).to.be.equal( 1 );
        });

        it( "should be unsubscribed after `unsubscribe`", function () {
            this.subscription.unsubscribe();

            expect(
                this.subscription.subscribed()
            ).to.be.equal( 0 );
        });

        it( "shouldnt be unsubscribed when subscribed ", function(){
            this.subscription.subscribe();

            expect(
                this.subscription.unsubscribed()
            ).to.be.equal( false );
        });

        it( "shouldnt be subscribed when unsubscribed ", function(){
            this.subscription.unsubscribe();

            expect(
                this.subscription.subscribed()
            ).to.be.equal( 0 );
        });

        it( "should be pending when asked for it", function(){
            this.subscription.status = Subscription.STATUS.PENDING;
            expect(
                this.subscription.status
            ).to.be.equal( -1 );
        });
    });

});
