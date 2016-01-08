angular.module('nflpoolApp', ['ngResource'])
  .config(function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] =
      $('meta[name=csrf-token]').attr('content');
  })
  .controller('nflpoolController', function nflpoolController($scope, $http, $resource){
    var nflpool = this;

    // var Nflpool = $resource('/api/nflpool/:id', {id:'@id'},
    //     {
    //       'update': { method: 'patch' }
    //     }
    //   );

    // Nflpool.query(function(data){
    //   $scope.nflpool = data
    // });

    nflpool.teams = [
      {
        team: 'Dolphins',
        city: 'Miami',
        color1: 'orange',
        color2: 'green'
      },
      {
        team: '49ers',
        city: 'San Francisco',
        color1: 'AA0000',
        color2: 'B3995D'
      },
      {
        team: 'Giants',
        city: 'New York',
        color1: '0B2265',
        color2: 'A71930'
      }
    ];

    nflpool.boxes = [
      {
        poolid: 'abc123', firstname: 'fn', lastname: 'ln', initials: '', boxid: '0'
      },
      {
        poolid: 'abc123', firstname: 'sdf', lastname: 'sdf', initials: '', boxid: '1'
      },
      {
        poolid: 'abc123', firstname: 'qweqwe', lastname: 'werwer', initials: '', boxid: '2'
      },
      {
        poolid: 'abc123', firstname: 'zxcv', lastname: 'zxcv', initials: '', boxid: '3'
      },
      {
        poolid: 'abc123', firstname: 'tyrty', lastname: 'rtyty', initials: '', boxid: '4'
      },
      {
        poolid: 'abc123', firstname: 'erty', lastname: 'erty', initials: '', boxid: '5'
      },
      {
        poolid: 'abc123', firstname: 'ghjk', lastname: 'hgjk', initials: '', boxid: '6'
      },
      {
        poolid: 'abc123', firstname: 'bbbb', lastname: 'bbbbb', initials: '', boxid: '7'
      },
      {
        poolid: 'abc123', firstname: 'hggff', lastname: 'hggff', initials: '', boxid: '8'
      },
      {
        poolid: 'abc123', firstname: 'dsa', lastname: 'asd', initials: '', boxid: '9'
      }
    ];

    nflpool.data = [
      {
        id: 'abc123',
        name: 'Name',
        email: 'name1@name.com',
        passcode: 'nfl2016',
        hometeam: 'Giants',
        homecity: '',
        homecolor1: '',
        homecolor2: '',
        awayteam: '49ers',
        awaycity: '',
        awaycolor1: '',
        awaycolor2: '',
        x0: '0',
        x1: '1',
        x2: '2',
        x3: '3',
        x4: '4',
        x5: '5',
        x6: '6',
        x7: '7',
        x8: '8',
        x9: '9',
        y0: '0',
        y1: '1',
        y2: '2',
        y3: '3',
        y4: '4',
        y5: '5',
        y6: '6',
        y7: '7',
        y8: '8',
        y9: '9'
      }
    ];

    var setTeams = function(){
      for (var i = 0; i < nflpool.teams.length; i++){
        if (nflpool.data[0].hometeam == nflpool.teams[i].team){
          nflpool.data[0].homecity = nflpool.teams[i].city;
          nflpool.data[0].homecolor1 = nflpool.teams[i].color1;
          nflpool.data[0].homecolor2 = nflpool.teams[i].color2;
        }
      }
      for (var i = 0; i < nflpool.teams.length; i++){
        if (nflpool.data[0].awayteam == nflpool.teams[i].team){
          nflpool.data[0].awaycity = nflpool.teams[i].city;
          nflpool.data[0].awaycolor1 = nflpool.teams[i].color1;
          nflpool.data[0].awaycolor2 = nflpool.teams[i].color2;
        }
      }
    }
    setTeams();

    var setInitials = function(){
      for (var i = 0; i < nflpool.boxes.length; i++){
        nflpool.boxes[i].initials = (nflpool.boxes[i].firstname).charAt(0) + "." + (nflpool.boxes[i].lastname).charAt(0) + ".";
      }
    }
    setInitials();

  $(document).ready(function(){
    $('.box').hover(function(){
      $(this).css('background-color', '#FFCC00');
    },function(){
      $(this).css('background-color', '#FFFFFF');
    });

    $('.box').click(function(){
      var boxid = $(this).attr('data-info');
      boxid = Number(boxid);
      $('.modal-title').text(nflpool.data[0].homecity + " vs " + nflpool.data[0].awaycity);
      $('.modal-body').text(nflpool.boxes[boxid].firstname + " " + nflpool.boxes[boxid].lastname);
    });
  });


  });