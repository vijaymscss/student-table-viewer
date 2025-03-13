
import { Student } from '../types/Student';

// Generate 1000 realistic student records
function generateStudents(count: number): Student[] {
  const firstNames = [
    'Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'Ethan', 'Sophia', 'Mason', 'Isabella', 'James',
    'Charlotte', 'Jackson', 'Amelia', 'Aiden', 'Mia', 'Lucas', 'Harper', 'Elijah', 'Evelyn', 'Logan',
    'Abigail', 'Benjamin', 'Emily', 'Alexander', 'Elizabeth', 'Michael', 'Sofia', 'Daniel', 'Avery', 'William',
    'Ella', 'Matthew', 'Scarlett', 'Henry', 'Grace', 'Joseph', 'Chloe', 'Samuel', 'Victoria', 'David',
    'Madison', 'Carter', 'Lily', 'Wyatt', 'Hannah', 'Jayden', 'Zoe', 'John', 'Penelope', 'Owen',
    'Riley', 'Jack', 'Layla', 'Luke', 'Lillian', 'Gabriel', 'Nora', 'Anthony', 'Zoey', 'Isaac',
    'Samantha', 'Grayson', 'Aubrey', 'Julian', 'Audrey', 'Christopher', 'Brooklyn', 'Joshua', 'Claire', 'Andrew',
    'Savannah', 'Lincoln', 'Skylar', 'Ryan', 'Lucy', 'Nathan', 'Paisley', 'Aaron', 'Kennedy', 'Isaiah',
    'Sarah', 'Thomas', 'Madelyn', 'Charles', 'Eleanor', 'Caleb', 'Maya', 'Josiah', 'Ariana', 'Christian',
    'Gabriella', 'Hunter', 'Hailey', 'Eli', 'Kaylee', 'Jonathan', 'Allison', 'Connor', 'Alexa', 'Landon'
  ];

  const lastNames = [
    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson',
    'Martinez', 'Anderson', 'Taylor', 'Thomas', 'Hernandez', 'Moore', 'Martin', 'Jackson', 'Thompson', 'White',
    'Lopez', 'Lee', 'Gonzalez', 'Harris', 'Clark', 'Lewis', 'Robinson', 'Walker', 'Perez', 'Hall',
    'Young', 'Allen', 'Sanchez', 'Wright', 'King', 'Scott', 'Green', 'Baker', 'Adams', 'Nelson',
    'Hill', 'Ramirez', 'Campbell', 'Mitchell', 'Roberts', 'Carter', 'Phillips', 'Evans', 'Turner', 'Torres',
    'Parker', 'Collins', 'Edwards', 'Stewart', 'Flores', 'Morris', 'Nguyen', 'Murphy', 'Rivera', 'Cook',
    'Rogers', 'Morgan', 'Peterson', 'Cooper', 'Reed', 'Bailey', 'Bell', 'Gomez', 'Kelly', 'Howard',
    'Ward', 'Cox', 'Diaz', 'Richardson', 'Wood', 'Watson', 'Brooks', 'Bennett', 'Gray', 'James',
    'Reyes', 'Cruz', 'Hughes', 'Price', 'Myers', 'Long', 'Foster', 'Sanders', 'Ross', 'Morales',
    'Powell', 'Sullivan', 'Russell', 'Ortiz', 'Jenkins', 'Gutierrez', 'Perry', 'Butler', 'Barnes', 'Fisher'
  ];

  const cities = [
    'San Francisco', 'Oakland', 'Berkeley', 'San Jose', 'Palo Alto', 'Mountain View', 'Cupertino', 'Sunnyvale', 'Santa Clara', 'Fremont',
    'Hayward', 'Walnut Creek', 'Concord', 'Pleasanton', 'Livermore', 'Dublin', 'San Mateo', 'Redwood City', 'South San Francisco', 'Daly City',
    'San Rafael', 'Novato', 'Petaluma', 'Santa Rosa', 'Napa', 'Vallejo', 'Fairfield', 'Vacaville', 'Davis', 'Sacramento',
    'Stockton', 'Modesto', 'Tracy', 'Los Gatos', 'Campbell', 'Saratoga', 'Milpitas', 'Union City', 'Newark', 'Menlo Park'
  ];

  const streets = [
    'Main Street', 'Oak Avenue', 'Pine Street', 'Maple Road', 'Cedar Lane', 'Elm Street', 'Washington Avenue', 'Park Place', 'Lake View Drive', 'Sunset Boulevard',
    'Highland Avenue', 'Forest Drive', 'Mountain View Drive', 'Meadow Lane', 'Valley Road', 'Spring Street', 'Willow Avenue', 'Riverdale Drive', 'Lakeshore Drive', 'Ocean Avenue',
    'Broadway', 'University Avenue', 'College Street', 'Technology Parkway', 'Innovation Way', 'Digital Drive', 'Silicon Avenue', 'Bay Street', 'Golden Gate Way', 'Mission Street',
    'Market Street', 'Montgomery Street', 'Powell Street', 'Divisadero Street', 'Fillmore Street', 'Haight Street', 'Castro Street', 'Valencia Street', 'Folsom Street', 'Howard Street'
  ];

  const students: Student[] = [];

  for (let i = 1; i <= count; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const name = `${firstName} ${lastName}`;
    
    const streetNumber = Math.floor(Math.random() * 9000) + 1000;
    const street = streets[Math.floor(Math.random() * streets.length)];
    const city = cities[Math.floor(Math.random() * cities.length)];
    const address = `${streetNumber} ${street}, ${city}, CA ${Math.floor(Math.random() * 89999) + 10000}`;
    
    const rollNoDigits = i.toString().padStart(3, '0');
    
    // Generate random dates between 1995 and 2005
    const year = 1995 + Math.floor(Math.random() * 10);
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;
    const dob = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    
    // Generate mobile number with US format
    const areaCode = 300 + Math.floor(Math.random() * 700);
    const phoneNumber1 = 100 + Math.floor(Math.random() * 900);
    const phoneNumber2 = 1000 + Math.floor(Math.random() * 9000);
    const mobile = `(${areaCode}) ${phoneNumber1}-${phoneNumber2}`;
    
    // Create email from first and last name
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;
    
    students.push({
      id: i,
      rollNo: rollNoDigits,
      name,
      address,
      email,
      mobile,
      dob,
    });
  }
  
  return students;
}

export const students: Student[] = generateStudents(1000);
