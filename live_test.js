// 1. “Do not know how to serialize a BigInt”  – How to fix this error?
export async function POST(req, res) {
  const prisma = new PrismaClient();

  try {
    const newStudent = await prisma.student.create({
      data: {
        name: "John Doe",
        score: BigInt(1000000),
      },
    });

    return NextResponse.json({ status: "success", data: newStudent });
  } catch (err) {
    return NextResponse.json({ status: "error", data: err });
  }
}

// 2. Suppose you have a student list containing data of 50 students. How to retrieve the last 5 users from here?
export async function GET(req, res) {
  const prisma = new PrismaClient();

  try {
    const students = await prisma.students.findMany({
      take: 5,
      orderBy: { id: "desc" },
    });

    return NextResponse.json({ status: "success", data: students });
  } catch (err) {
    return NextResponse.json({ status: "error", data: err });
  }
}

// 3. Suppose you have a list of people containing data of 20 people. How to bring the next 10 users except the first 5 from here?
export async function GET(req, res) {
  const prisma = new PrismaClient();

  try {
    const peoples = await prisma.students.findMany({
      skip: 5,
      take: 10,
    });

    return NextResponse.json({ status: "success", data: peoples });
  } catch (err) {
    return NextResponse.json({ status: "error", data: err });
  }
}

// 4. Suppose you have a list of people containing data of 30 people. And one guy's email is - "alex@gmail.com". You want to show the data of the person under the email. How to do that?
export async function PUT(req, res) {
  const prisma = new PrismaClient();

  try {
    const person = await prisma.students.findUnique({
      where: {
        email: "alex@gmail.com",
      },
    });

    return NextResponse.json({ status: "success", data: person });
  } catch (err) {
    return NextResponse.json({ status: "error", data: err });
  }
}
