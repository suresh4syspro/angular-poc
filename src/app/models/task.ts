export class Task {
    id: number;
    createdDate: string;
    empRole: string;
    message: string;
    createdBy: string;

    set setId(id: number) {
        this.id = id;
    }

    set setCreatedDate(createdDate: string) {
        this.createdDate = createdDate;
    }

    set setEmpRole(empRole: string) {
        this.empRole = empRole;
    }
    set setMessage(message: string) {
        this.message = message;
    }

    set setCreatedBy(createdBy: string) {
        this.createdBy = createdBy;
    }

}
