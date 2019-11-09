/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        // Making sure that the objects has a valud url
        it('AllFeeds objects have a URL', function () {
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });
        // Making sure that the objects has a valud name
        it('AllFeeds objects have a name', function () {
            // used a for of loop to loop thru the objects
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });

    // testing the side menu

    describe('The menu', function () {
        // tests the bar if its initially hidden
        it('The menu is hidden', function () {
            expect(document.querySelector("body").classList.contains('menu-hidden')).toBe(true);
        });
        // basiclly we're checking if the button of the menu works or not
        it('When the button is clicked the menu can toggle', function () {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function () {
        beforeEach(function (done) {
            //we're making a callback
            loadFeed(0, done);
        });
        //checking the length of the feed
        it('The feed has more than one entry', function () {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    describe('New Feed Selection', function () {
        // we're loading an old call back here
        let oldFeed
        beforeEach(function (done) {
            loadFeed(0, function () {
                oldFeed = $('a.entry-link')[0].href;
                done();
            });

        });

        it('The feed changed with every callback', function () {
            // im making another callback so we can compare in the expect method;
            let newFeed
            loadFeed(1, function () {
                newFeed = $('a.entry-link')[0].href;
                console.log(newFeed);
            });
            console.log(oldFeed);
            expect(newFeed).not.toBe(oldFeed);

        });

    });







}());