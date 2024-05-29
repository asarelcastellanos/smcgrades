function compareFn(a: any, b: any) {

    let easyFactor_A = (a.A + a.B + a.C) / a.Total;
    let easyFactor_B = (b.A + b.B + b.C) / b.Total;

    if(easyFactor_A < easyFactor_B) {
        return -1;
    } else if(easyFactor_A > easyFactor_B) {
        return 1;
    }

    return 0;
}

export default function organize_courses(courses: any[]) {

    courses.sort(compareFn)

    return courses
}