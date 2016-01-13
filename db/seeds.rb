# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Team.create(team: 'Dolphins', city: 'Miami', color1: 'CCCC00', color2: 'CCFF00', helmet: '-85px -180px')
Team.create(team: '49ers', city: 'San Francisco', color1: 'AA0000', color2: 'B3995D', helmet: '-360px -180px')
Team.create(team: 'Giants', city: 'New York', color1: '0B2265', color2: 'A71930', helmet: '0 -270px')

Pool.create(name: 'Name', email: 'name1@name.com', passcode: 'nfl2016', hometeam: 'Giants', homecity: 'New York', homecolor1: '0B2265', homecolor2: 'A71930', homehelmet: '0px -270px', awayteam: '49ers', awaycity: 'San Francisco', awaycolor1: 'AA0000', awaycolor2: 'B3995D', awayhelmet: '-360px -180px', x0: '1', x1: '2', x2: '3', x3: '4', x4: '5', x5: '6', x6: '7', x7: '8', x8: '9', x9: '0', y0: '0', y1: '1', y2: '2', y3: '3', y4: '4', y5: '5', y6: '6', y7: '7', y8: '8', y9: '9')

Box.create(firstname: 'fn', lastname: 'ln', initials: 'F.L.', boxid: '0')
Box.create(firstname: 'sdf', lastname: 'sdf', initials: 'S.S.', boxid: '1')
Box.create(firstname: 'qweqwe', lastname: 'werwer', initials: 'Q.W.', boxid: '2')
Box.create(firstname: 'zxcv', lastname: 'zxcv', initials: 'Z.Z.', boxid: '3')
Box.create(firstname: 'tyrty', lastname: 'rtyty', initials: 'T.R.', boxid: '4')
Box.create(firstname: 'erty', lastname: 'erty', initials: 'E.E.', boxid: '5')
Box.create(firstname: 'ghjk', lastname: 'hgjk', initials: 'G.H.', boxid: '6')
Box.create(firstname: 'bbbb', lastname: 'bbbbb', initials: 'B.B.', boxid: '7')
Box.create(firstname: 'hggff', lastname: 'hggff', initials: 'H.H.', boxid: '8')
Box.create(firstname: 'dsa', lastname: 'asd', initials: 'D.A.', boxid: '9')
Box.create(firstname: 'fn', lastname: 'ln', initials: 'F.L.', boxid: '10')
Box.create(firstname: 'sdf', lastname: 'sdf', initials: 'S.S.', boxid: '11')
Box.create(firstname: 'qweqwe', lastname: 'werwer', initials: 'Q.W.', boxid: '12')
Box.create(firstname: 'zxcv', lastname: 'zxcv', initials: 'Z.Z.', boxid: '13')
Box.create(firstname: 'tyrty', lastname: 'rtyty', initials: 'T.R.', boxid: '14')
Box.create(firstname: 'erty', lastname: 'erty', initials: 'E.E.', boxid: '15')
Box.create(firstname: 'ghjk', lastname: 'hgjk', initials: 'G.H.', boxid: '16')
Box.create(firstname: 'bbbb', lastname: 'bbbbb', initials: 'B.B.', boxid: '17')
Box.create(firstname: 'hggff', lastname: 'hggff', initials: 'H.H.', boxid: '18')
Box.create(firstname: 'dsa', lastname: 'asd', initials: 'D.A.', boxid: '19')
