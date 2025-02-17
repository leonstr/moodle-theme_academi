// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * theme.js
 * @copyright  2015 onwards LMSACE Dev Team (http://www.lmsace.com)
 * @author    LMSACE Dev Team
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

define(['jquery'], function($) {
    var img = $("nav#header").find('.avatar').find('img[src$="/u/f2"]');
    var src = img.attr('src');
    img.attr('src', src + "_white");
    /* ------- Check navbar button status -------- */
    if ($("#header .navbar-nav button").attr('aria-expanded') === "true") {
        $("#header .navbar-nav").find('button').addClass('is-active');
    }
    /* ------ Event for change the drawer navbar style  ------ */
    $("#header .navbar-nav button").click(function() {
       var This = $(this);
        setTimeout(function() {
            if (This.attr('aria-expanded') === "true") {
                $("#header .navbar-nav").find('button').addClass('is-active');
            } else {
                $("#header .navbar-nav").find('button').removeClass('is-active');
            }
        }, 200);
    });

    var foothtml = $('footer#page-footer').text();
    if ($.trim(foothtml).length == 0) {
        $('footer#page-footer').addClass('empty-footer');
    }
    var addhtml = $('.address-head').text();
    if ($.trim(addhtml).length == 0) {
        $('.address-head').addClass('empty-address');
    }

});
