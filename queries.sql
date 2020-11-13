CREATE (Shawshank:Movie {title:'Shawshank Redemption', released:1994, score:99})
CREATE (Darabont:Person {name:'Frank Darabont', born:1959})
CREATE (Robbins:Person {name:'Tim Robbins', born:1989})
CREATE (Freeman:Person {name:'Morgan Freeman', born:1956})
CREATE (Guntion:Person {name:'Bob Guntion', born:1957})
CREATE (Sadler:Person {name:'William Sadler', born:1959})
CREATE (CastleRock:Studio {name:'Castle Rock Entertainment'})
CREATE
(Freeman)-[:STARRED {roles:['Red']}]->(Shawshank),
(Robbins)-[:STARRED {roles:['Andy Dufrense']}]->(Shawshank),
(Guntion)-[:STARRED {roles:['Brooks Hatlen']}]->(Shawshank),
(Sadler)-[:STARRED {roles:['Warden Norton']}]->(Shawshank),
(Darabont)-[:DIRECTED]->(Shawshank),
(CastleRock)-[:CREATED]->(Shawshank)

CREATE (Godfather:Movie {title:'Godfather', released:1972, score:99})
CREATE (Marlon:Person {name:'Marlon Brando', born:1949})
CREATE (Pacino:Person {name:'Al Pacino', born:1963})
CREATE (Duvall:Person {name:'Robert Duvall', born:1961})
CREATE (Caan:Person {name:'James Caan', born:1971})
CREATE (Copolla:Person {name:'Ford Francis Copolla', born:1956})
CREATE (Paramount:Studio {name:'Paramount Pictures'})
CREATE
(Marlon)-[:STARRED {roles:['Don Vito Corleone']}]->(Godfather),
(Pacino)-[:STARRED {roles:['Michael Corleone']}]->(Godfather),
(Duvall)-[:STARRED {roles:['Tom Hagen']}]->(Godfather),
(Caan)-[:STARRED {roles:['Sonny Corleone']}]->(Godfather),
(Copolla)-[:DIRECTED]->(Godfather),
(Paramount)-[:CREATED]->(Godfather)

CREATE (Forrest:Movie {title:'Forrest Gump', released:1994, score:86})
CREATE (Hanks:Person {name:'Tom Hanks', born:1968})
CREATE (Sinsie:Person {name:'Gary Sinsie', born:1969})
CREATE (Williamson:Person {name:'Mykelti Williamson', born:1971})
CREATE (Field:Person {name:'Sally Field', born:1977})
CREATE (Zemeckis:Person {name:'Robert Zemeckis', born:1951})
CREATE
(Hanks)-[:STARRED {roles:['Forrest Gump']}]->(Forrest),
(Sinsie)-[:STARRED {roles:['Dan Taylor']}]->(Forrest),
(Williamson)-[:STARRED {roles:['Bubba']}]->(Forrest),
(Field)-[:STARRED {roles:['Miss Gump']}]->(Forrest),
(Zemeckis)-[:DIRECTED]->(Forrest),
(Paramount)-[:CREATED]->(Forrest)

CREATE (Batman:Movie {title:'Batman Rises', released:2012, score:81})
CREATE (Bale:Person {name:'Christian Bale', born:1974})
CREATE (Oldman:Person {name:'Gary Oldman', born:1969})
CREATE (Hardy:Person {name:'Tom Hardy', born:1976})
CREATE (Hathaway:Person {name:'Anne Hathaway', born:1977})
CREATE (Nolan:Person {name:'Christopher Nolan', born:1961})
CREATE (Warner:Studio {name:'Warner Bros'})
CREATE
(Bale)-[:STARRED {roles:['Batman']}]->(Batman),
(Oldman)-[:STARRED {roles:['Detective James Gordon']}]->(Batman),
(Hardy)-[:STARRED {roles:['Bane']}]->(Batman),
(Freeman)-[:STARRED {roles:['Lucios Fox']}]->(Batman),
(Hathaway)-[:STARRED {roles:['Cat Woman']}]->(Batman),
(Nolan)-[:DIRECTED]->(Batman),
(Warner)-[:CREATED]->(Batman)

CREATE (Inter:Movie {title:'Interstellar', released:2014, score:90})
CREATE (Matthew:Person {name:'Matthew McConaughey', born:1970})
CREATE (Chastain:Person {name:'Jessica Chastain', born:1976})
CREATE (Foy:Person {name:'Mackenzie Foy', born:1981})
CREATE (Caine:Person {name:'Michael Caine', born:1961})
CREATE
(Matthew)-[:STARRED {roles:['Cooper']}]->(Inter),
(Chastain)-[:STARRED {roles:['Murph']}]->(Inter),
(Foy)-[:STARRED {roles:['Crew Member']}]->(Inter),
(Hathaway)-[:STARRED {roles:['Dr Brand']}]->(Inter),
(Caine)-[:STARRED {roles:['Professor Brand']}]->(Inter),
(Nolan)-[:DIRECTED]->(Inter),
(Warner)-[:CREATED]->(Inter)
