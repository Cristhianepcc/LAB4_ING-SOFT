import { CreateCourseContentDTO } from '/home/projectt5/Documentos/UNI/ING_SOFT_2/Practica_Laboratorio/laboratorio4/university_academic_management_system/apps/api/src/application/dtos/CourseContentDTO';

describe('CreateCourseContentDTO.create()', () => {
  
  // Caso 1: Creación válida del DTO
  it('debería crear correctamente un DTO cuando los datos son válidos', () => {
    // Arrange
    const input = {
      courseId: 'C001',
      weekNumber: 5,
      topic: 'Introducción a TypeScript',
      description: 'Aprender los conceptos básicos'
    };

    // Act
    const [error, dto] = CreateCourseContentDTO.create(input);

    // Assert
    expect(error).toBeUndefined();
    expect(dto).toBeInstanceOf(CreateCourseContentDTO);
    expect(dto?.courseId).toBe('C001');
    expect(dto?.weekNumber).toBe(5);
    expect(dto?.topic).toBe('Introducción a TypeScript');
    expect(dto?.description).toBe('Aprender los conceptos básicos');
  });

  // Caso 2: Falta el campo obligatorio courseId
  it('debería retornar error cuando falta el campo courseId', () => {
    // Arrange
    const input = {
      courseId: '',
      weekNumber: 5,
      topic: 'Validaciones',
      description: 'Prueba sin ID'
    };

    // Act
    const [error, dto] = CreateCourseContentDTO.create(input);

    // Assert
    expect(error).toBe('Missing courseId');
    expect(dto).toBeUndefined();
  });

  // Caso 3: Valor fuera del rango permitido para weekNumber
  it('debería retornar error cuando weekNumber está fuera del rango permitido', () => {
    // Arrange
    const input = {
      courseId: 'C002',
      weekNumber: 25,
      topic: 'Errores de validación',
      description: 'Semana inválida'
    };

    // Act
    const [error, dto] = CreateCourseContentDTO.create(input);

    // Assert
    expect(error).toBe('Week number must be between 1 and 20');
    expect(dto).toBeUndefined();
  });
});
