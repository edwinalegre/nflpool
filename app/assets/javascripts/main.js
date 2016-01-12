angular.module('poolApp', ['ngResource'])
  .config(function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] =
      $('meta[name=csrf-token]').attr('content');
  })
  .controller('poolController', function poolController($scope, $http, $resource){
    var pool = this;

    var teams = $resource('/api/teams/:id', {id:'@id'});

    var boxes = $resource('/api/boxes/:id', {id:'@id'});

    var pools = $resource('/api/pools/:id', {id:'@id'});


    boxes.query(function(data){
      $scope.boxes = data;
    });

    pools.query(function(data){
      $scope.pools = data;
    });

    teams.query(function(data){
      $scope.teams = data;
    });



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


        $('.modal-title').text($scope.pools[0].homecity + " vs " + $scope.pools[0].awaycity);
        $('.home-helmets').css('background-position', $scope.pools[0].homehelmet);
        $('.away-helmets').css('background-position', $scope.pools[0].awayhelmet);
        $('.modal-text').text($scope.boxes[boxid].firstname + " " + $scope.boxes[boxid].lastname);
        $('.modal-xy').text(xbox + " - " + ybox);
      });
    });


  });


  
    // teams.query(function(data){
    //   $scope.teams = data;
    // console.log($scope.teams);
    // });

    // vm.boxes = boxes.query(function(data){
    //   $scope.boxes = data;
    // });

    // vm.pools = pools.query(function(data){
    //   $scope.pools = data;
    // });


    // var setTeams = function(){
    //   for (var i = 0; i < $scope.teams.length; i++){
    //     if ($scope.pools[0].hometeam == $scope.teams[i].team){
    //       $scope.pools[0].homecity = $scope.teams[i].city;
    //       $scope.pools[0].homecolor1 = $scope.teams[i].color1;
    //       $scope.pools[0].homecolor2 = $scope.teams[i].color2;
    //       $scope.pools[0].homehelmet = $scope.teams[i].helmet;
    //     }
    //   }
    //   for (var i = 0; i < $scope.teams.length; i++){
    //     if ($scope.pools[0].awayteam == $scope.teams[i].team){
    //       $scope.pools[0].awaycity = $scope.teams[i].city;
    //       $scope.pools[0].awaycolor1 = $scope.teams[i].color1;
    //       $scope.pools[0].awaycolor2 = $scope.teams[i].color2;
    //       $scope.pools[0].awayhelmet = $scope.teams[i].helmet;
    //     }
    //   }
    // }
    // setTeams();

    // var setInitials = function(){
    //   for (var i = 0; i < $scope.boxes.length; i++){
    //     $scope.boxes[i].initials = ($scope.boxes[i].firstname).charAt(0) + "." + ($scope.boxes[i].lastname).charAt(0) + ".";
    //   }
    // }
    // setInitials();

    // $(document).ready(function(){
    //   $('.box').hover(function(){
    //     $(this).css('background-color', '#FFCC00');
    //   },function(){
    //     $(this).css('background-color', '#FFFFFF');
    //   });

    //   $('.box').click(function(){
    //     var xbox = $(this).attr('data-x');
    //     var ybox =  $(this).attr('data-y');
    //     var boxid = $(this).attr('data-info');
    //     boxid = Number(boxid);
    //     $('.modal-title').text($scope.pools[0].homecity + " vs " + $scope.pools[0].awaycity);
    //     $('.home-helmets').css('background-position', $scope.pool[0].homehelmet);
    //     $('.away-helmets').css('background-position', $scope.pool[0].awayhelmet);
    //     $('.modal-text').text($scope.boxes[boxid].firstname + " " + $scope.boxes[boxid].lastname);
    //     $('.modal-xy').text(xbox + " - " + ybox);
    //   });
    // });













  // var Pool = $resource('/api/pool/:id', {id:'@id'},
  //     {
  //       'update': { method: 'patch' }
  //     }
  //   );

  // Pool.query(function(data){
  //   $scope.pool = data
  // });



  //   var setTeams = function(){
  //     for (var i = 0; i < $scope.pool.teams.length; i++){
  //       if (pool.data[0].hometeam == $scope.pool.teams[i].team){
  //         pool.data[0].homecity = $scope.pool.teams[i].city;
  //         pool.data[0].homecolor1 = $scope.pool.teams[i].color1;
  //         pool.data[0].homecolor2 = $scope.pool.teams[i].color2;
  //         pool.data[0].homehelmet = $scope.pool.teams[i].helmet;
  //       }
  //     }
  //     for (var i = 0; i < $scope.pool.teams.length; i++){
  //       if (pool.data[0].awayteam == $scope.pool.teams[i].team){
  //         pool.data[0].awaycity = $scope.pool.teams[i].city;
  //         pool.data[0].awaycolor1 = $scope.pool.teams[i].color1;
  //         pool.data[0].awaycolor2 = $scope.pool.teams[i].color2;
  //         pool.data[0].awayhelmet = $scope.pool.teams[i].helmet;
  //       }
  //     }
  //   }
  //   setTeams();

  //   var setInitials = function(){
  //     for (var i = 0; i < $scope.pool.boxes.length; i++){
  //       pool.boxes[i].initials = (pool.boxes[i].firstname).charAt(0) + "." + (pool.boxes[i].lastname).charAt(0) + ".";
  //     }
  //   }
  //   setInitials();

  // $(document).ready(function(){
  //   $('.box').hover(function(){
  //     $(this).css('background-color', '#FFCC00');
  //   },function(){
  //     $(this).css('background-color', '#FFFFFF');
  //   });

  //   $('.box').click(function(){
  //     var xbox = $(this).attr('data-x');
  //     var ybox =  $(this).attr('data-y');
  //     var boxid = $(this).attr('data-info');
  //     boxid = Number(boxid);
  //     $('.modal-title').text(pool.data[0].homecity + " vs " + pool.data[0].awaycity);
  //     $('.home-helmets').css('background-position', pool.data[0].homehelmet);
  //     $('.away-helmets').css('background-position', pool.data[0].awayhelmet);
  //     $('.modal-text').text(pool.boxes[boxid].firstname + " " + pool.boxes[boxid].lastname);
  //     $('.modal-xy').text(xbox + " - " + ybox);
  //     console.log(pool.boxes[boxid])
  //   });
  // });

