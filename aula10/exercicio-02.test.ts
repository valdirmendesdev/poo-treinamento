import assert from 'assert';
import { describe, it } from 'node:test';

interface FileWriter {
  write(content: string): Promise<void>;
}

export enum LogLevel {
  INFO,
  WARNING,
  ERROR
}

class Logger {
  constructor(
    private fileWriter: FileWriter,
    private logLevel: LogLevel = LogLevel.INFO
  ) { }

  async info(message: string): Promise<void> {
    if (this.logLevel <= LogLevel.INFO) {
      await this.log(LogLevel.INFO, message);
    }
  }

  async warning(message: string): Promise<void> {
    if (this.logLevel <= LogLevel.WARNING) {
      await this.log(LogLevel.WARNING, message);
    }
  }

  async error(message: string): Promise<void> {
    if (this.logLevel <= LogLevel.ERROR) {
      await this.log(LogLevel.ERROR, message);
    }
  }

  private async log(level: LogLevel, message: string): Promise<void> {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${LogLevel[level]}] ${message}`;
    await this.fileWriter.write(logMessage);
  }
}

class FakeFileWriter implements FileWriter {
  public writtenLogs: string[] = [];

  async write(content: string): Promise<void> {
    this.writtenLogs.push(content);
  }
}

describe('Logger', () => {
  it('deve guardar uma mensagem informativa', async () => {
    const fakeFileWriter = new FakeFileWriter();
    const logger = new Logger(fakeFileWriter);

    await logger.info('Teste mensagem informativa');

    assert.strictEqual(fakeFileWriter.writtenLogs.length, 1);
    assert(fakeFileWriter.writtenLogs[0].includes('[INFO]'));
    assert(fakeFileWriter.writtenLogs[0].includes('Teste mensagem informativa'));
  });

  it('deve guardar uma mensagem de advertência', async () => {
    const fakeFileWriter = new FakeFileWriter();
    const logger = new Logger(fakeFileWriter);

    await logger.warning('Teste mensagem de advertência');

    assert.strictEqual(fakeFileWriter.writtenLogs.length, 1);
    assert(fakeFileWriter.writtenLogs[0].includes('[WARNING]'));
    assert(fakeFileWriter.writtenLogs[0].includes('Teste mensagem de advertência'));
  });

  it('deve guardar uma mensagem de erro', async () => {
    const fakeFileWriter = new FakeFileWriter();
    const logger = new Logger(fakeFileWriter);

    await logger.error('Teste mensagem de erro');

    assert.strictEqual(fakeFileWriter.writtenLogs.length, 1);
    assert(fakeFileWriter.writtenLogs[0].includes('[ERROR]'));
    assert(fakeFileWriter.writtenLogs[0].includes('Teste mensagem de erro'));
  });

  it('deve respeitar o nível de log definido', async () => {
    const fakeFileWriter = new FakeFileWriter();
    const logger = new Logger(fakeFileWriter, LogLevel.WARNING);

    await logger.info('Esta mensagem não deve ser salva');
    await logger.warning('Esta mensagem deve ser salva');
    await logger.error('Esta mensagem deve ser salva também');

    assert.strictEqual(fakeFileWriter.writtenLogs.length, 2);
    assert(fakeFileWriter.writtenLogs[0].includes('[WARNING]'));
    assert(fakeFileWriter.writtenLogs[1].includes('[ERROR]'));
  });
});