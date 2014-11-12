;(function() {

    alert('Click an equation to solve');

    var cleanString = function(string) {
      string = string.replace(/\s+/g, '')
        .replace(/\?/g, '')
        .replace(/\//g, '%2F' )
        .replace(/\^/g, '%5E')
        .replace(/</g, '%3C')
        .replace(/>/g, '%3E')
        .replace(/\+/g, '%2B')
        .replace(/=/g, '%3D');
      
      return string;
    };

    $('code').css('cursor', 'pointer').click(function() {
        var eqnString = $(this).data('mathFormula');
        var formattedString = cleanString(eqnString);
        window.open('http://www.wolframalpha.com/input/?i=' + formattedString);

    });

})();

