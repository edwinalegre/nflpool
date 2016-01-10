angular.module('poolApp', ['ngResource'])
  .config(function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] =
      $('meta[name=csrf-token]').attr('content');
  })
  .controller('poolController', function poolController($scope, $http, $resource){
    var pool = this;

    // var Pool = $resource('/api/pool/:id', {id:'@id'},
    //     {
    //       'update': { method: 'patch' }
    //     }
    //   );

    // Pool.query(function(data){
    //   $scope.pool = data
    // });

    pool.teams = [
      {
        team: 'Dolphins',
        city: 'Miami',
        color1: 'CCCC00',
        color2: 'CCFF00',
        helmet: '-85px -180px'
      },
      {
        team: '49ers',
        city: 'San Francisco',
        color1: 'AA0000',
        color2: 'B3995D',
        helmet: '-360px -180px'
      },
      {
        team: 'Giants',
        city: 'New York',
        color1: '0B2265',
        color2: 'A71930',
        helmet: '0 -270px'
      }
    ];

    pool.boxes = [
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
      },
      {
        poolid: 'abc123', firstname: 'fn', lastname: 'ln', initials: '', boxid: '10'
      },
      {
        poolid: 'abc123', firstname: 'sdf', lastname: 'sdf', initials: '', boxid: '11'
      },
      {
        poolid: 'abc123', firstname: 'qweqwe', lastname: 'werwer', initials: '', boxid: '12'
      },
      {
        poolid: 'abc123', firstname: 'zxcv', lastname: 'zxcv', initials: '', boxid: '13'
      },
      {
        poolid: 'abc123', firstname: 'tyrty', lastname: 'rtyty', initials: '', boxid: '14'
      },
      {
        poolid: 'abc123', firstname: 'erty', lastname: 'erty', initials: '', boxid: '15'
      },
      {
        poolid: 'abc123', firstname: 'ghjk', lastname: 'hgjk', initials: '', boxid: '16'
      },
      {
        poolid: 'abc123', firstname: 'bbbb', lastname: 'bbbbb', initials: '', boxid: '17'
      },
      {
        poolid: 'abc123', firstname: 'hggff', lastname: 'hggff', initials: '', boxid: '18'
      },
      {
        poolid: 'abc123', firstname: 'dsa', lastname: 'asd', initials: '', boxid: '19'
      }
    ];

    pool.data = [
      {
        id: 'abc123',
        name: 'Name',
        email: 'name1@name.com',
        passcode: 'nfl2016',
        hometeam: 'Giants',
        homecity: '',
        homecolor1: '',
        homecolor2: '',
        homehelmet: '',
        awayteam: '49ers',
        awaycity: '',
        awaycolor1: '',
        awaycolor2: '',
        awayhelmet: '',
        x0: '1',
        x1: '2',
        x2: '3',
        x3: '4',
        x4: '5',
        x5: '6',
        x6: '9',
        x7: '6',
        x8: '5',
        x9: '7',
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
      for (var i = 0; i < pool.teams.length; i++){
        if (pool.data[0].hometeam == pool.teams[i].team){
          pool.data[0].homecity = pool.teams[i].city;
          pool.data[0].homecolor1 = pool.teams[i].color1;
          pool.data[0].homecolor2 = pool.teams[i].color2;
          pool.data[0].homehelmet = pool.teams[i].helmet;
        }
      }
      for (var i = 0; i < pool.teams.length; i++){
        if (pool.data[0].awayteam == pool.teams[i].team){
          pool.data[0].awaycity = pool.teams[i].city;
          pool.data[0].awaycolor1 = pool.teams[i].color1;
          pool.data[0].awaycolor2 = pool.teams[i].color2;
          pool.data[0].awayhelmet = pool.teams[i].helmet;
        }
      }
    }
    setTeams();

    var setInitials = function(){
      for (var i = 0; i < pool.boxes.length; i++){
        pool.boxes[i].initials = (pool.boxes[i].firstname).charAt(0) + "." + (pool.boxes[i].lastname).charAt(0) + ".";
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
      var xbox = $(this).attr('data-x');
      var ybox =  $(this).attr('data-y');
      var boxid = $(this).attr('data-info');
      boxid = Number(boxid);
      $('.modal-title').text(pool.data[0].homecity + " vs " + pool.data[0].awaycity);
      $('.home-helmets').css('background-position', pool.data[0].homehelmet);
      $('.away-helmets').css('background-position', pool.data[0].awayhelmet);
      $('.modal-text').text(pool.boxes[boxid].firstname + " " + pool.boxes[boxid].lastname);
      $('.modal-xy').text(xbox + " - " + ybox);
      console.log(pool.boxes[boxid])
    });
  });


  });