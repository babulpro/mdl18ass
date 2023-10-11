-- CreateTable
CREATE TABLE `tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(300) NOT NULL,
    `metaTitle` VARCHAR(200) NOT NULL,
    `slug` VARCHAR(200) NOT NULL,
    `user_id` INTEGER NOT NULL,

    UNIQUE INDEX `tag_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post_tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tagId` INTEGER NOT NULL,
    `tag_Id` VARCHAR(200) NOT NULL,

    UNIQUE INDEX `post_tag_tagId_key`(`tagId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tag` ADD CONSTRAINT `tag_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `post_tag`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `post_tag` ADD CONSTRAINT `post_tag_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
